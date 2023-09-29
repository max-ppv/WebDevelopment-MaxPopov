<svelte:head>
  <title>Logout - Ticket Manager</title>
  <meta name="description" content="Logging out of the Ticket Manager app." />
  <meta name="robots" content="noindex, nofollow" />
  <meta property="og:title" content="Logout - Ticket Manager" />
  <meta property="og:description" content="Logging out of the Ticket Manager app." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={import.meta.env.VITE_BASE_URL + '/logout'} />
</svelte:head>

<h1>Logging you out...</h1>

<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { getAuth, signOut } from 'firebase/auth';
  import { app } from 'service/firebase';

  onMount(() => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        console.log('User signed out');
        goto('/');
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  });
</script>
