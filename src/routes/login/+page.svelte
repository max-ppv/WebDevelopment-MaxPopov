<svelte:head>
  <title>Login - Ticket Manager</title>
  <meta name="description" content="Login to the Ticket Manager app to manage your tickets." />
  <meta property="og:title" content="Login - Ticket Manager" />
  <meta
    property="og:description"
    content="Login to the Ticket Manager app to manage your tickets."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={import.meta.env.VITE_BASE_URL + '/login'} />
</svelte:head>

<button class="block w-full px-4 py-2 text-gray-700 border rounded" on:click={login}
  >Login via Gmail</button
>

{#if errorMessage}
  <div class="mt-4 text-red-600">
    {errorMessage}
  </div>
{/if}

<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { app } from 'service/firebase';
  import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
  import { user } from 'service/authstore';
  import type { User } from 'service/authstore';

  let isUserLoggedIn: User | null = null;

  let errorMessage = '';

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  onMount(() => {
    const unsubscribe = user.subscribe((value) => {
      isUserLoggedIn = value;
      console.log('isUserLoggedIn', isUserLoggedIn);
      if (isUserLoggedIn && isUserLoggedIn.isLoggedIn) {
        goto('/');
      }
    });

    return () => {
      unsubscribe();
    };
  });

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('User signed in: ', result.user);
      goto('/'); // Redirect to home page
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error signing in: ', error);
        errorMessage = error.message;
      } else {
        console.error('An unknown error occurred');
        errorMessage = 'An unknown error occurred';
      }
    }
  };
</script>
