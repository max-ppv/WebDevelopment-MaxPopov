<!-- Input Fields -->
<svelte:head>
  <title>{pageTitle} - Ticket Manager</title>
  <meta name="description" content="Editing the ticket details for Ticket Manager system." />

  <!-- Open Graph Tags -->
  <meta property="og:title" content="{pageTitle} - Ticket Manager" />
  <meta property="og:description" content="Editing the ticket details for Ticket Manager system." />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="{import.meta.env.VITE_BASE_URL}/logo.png" />
  <meta property="og:url" content="{import.meta.env.VITE_BASE_URL}/edit/{data.id}" />
</svelte:head>

<div class="space-y-3">
  {#if data.id !== 'new'}
    <div class="text-sm text-gray-400">id: {data.id}</div>
  {/if}
  <!-- First Name Input -->
  <label for="firstName" class="block text-gray-700">First Name *</label>
  <input
    id="firstName"
    type="text"
    bind:value={ticket.firstName}
    placeholder="First Name *"
    class="w-full p-2 border rounded"
    required
  />

  <!-- Last Name Input -->
  <label for="lastName" class="block text-gray-700">Last Name *</label>
  <input
    id="lastName"
    type="text"
    bind:value={ticket.lastName}
    placeholder="Last Name *"
    class="w-full p-2 border rounded"
    required
  />

  <!-- Employee ID Input -->
  <label for="employeeID" class="block text-gray-700">Employee ID *</label>
  <input
    id="employeeID"
    type="number"
    bind:value={ticket.employeeID}
    placeholder="Employee ID *"
    class="w-full p-2 border rounded [&::-webkit-inner-spin-button]:appearance-none"
    required
  />

  <!-- Email Input -->
  <label for="email" class="block text-gray-700">Email *</label>
  <input
    id="email"
    type="email"
    bind:value={ticket.email}
    placeholder="Email *"
    class="w-full p-2 border rounded"
    required
  />

  <!-- Problem Type Dropdown -->
  <label for="problemType" class="block text-gray-700">Problem Type *</label>
  <select
    id="problemType"
    bind:value={ticket.problemType}
    class="w-full p-2 border rounded appearance-none"
    required
  >
    <option value="" disabled selected>Select a problem type</option>
    <option value="Technical Issue">Technical Issue</option>
    <option value="HR Issue">HR Issue</option>
    <option value="Payment Discrepancy">Payment Discrepancy</option>
    <option value="Training Request">Training Request</option>
    <option value="Other">Other</option>
  </select>

  <!-- Problem Textarea -->
  <label for="problemDescription" class="block text-gray-700">Problem *</label>
  <textarea
    id="problemDescription"
    bind:value={ticket.problem}
    placeholder="Problem *"
    class="w-full p-2 border rounded"
    required
  />

  <!-- Resolved? Section -->
  <div class="flex items-center justify-between">
    <span>Resolved?</span>
    <div>
      <label class="mr-2"><input type="radio" bind:group={ticket.resolved} value="yes" /> Yes</label
      >
      <label><input type="radio" bind:group={ticket.resolved} value="no" /> No</label>
    </div>
  </div>

  <!-- Buttons -->
  <div class="grid grid-cols-2 gap-8">
    <button
      on:click={() => {
        goto('/tickets');
      }}
      class="block px-4 py-2 text-gray-700 border rounded">All Tickets</button
    >
    <button on:click={saveData} class="block px-4 py-2 text-gray-700 border border-blue-200 rounded"
      >Save</button
    ></div
  >
</div>

<!-- Errors -->
<div class="mt-4">
  {#if $errorMessage}
    <div class="text-red-600">{$errorMessage}</div>
  {/if}
  {#if $successMessage}
    <div class="text-green-600">{$successMessage}</div>
  {/if}
</div>

<script lang="ts">
  import { user as userStore } from 'service/authstore';
  import type { User } from 'service/authstore';
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';
  import { isValidEmail } from 'utils/check';
  import type { Ticket } from 'types/ticket';
  import { db } from 'service/firebase';
  import { get, ref, set, push } from 'firebase/database';
  import { goto } from '$app/navigation';
  export let data: {
    id: string;
  };

  let currentUser: User | null = null;

  const unsubscribe = userStore.subscribe((value) => {
    currentUser = value;
    if (!currentUser || !currentUser.isLoggedIn) {
      goto('/');
    }
  });

  let ticket: Ticket = resetTicket();

  function resetTicket(): Ticket {
    return {
      firstName: '',
      lastName: '',
      employeeID: null,
      email: '',
      problemType: 'Technical Issue',
      problem: '',
      resolved: 'no'
    };
  }

  // Reactive messages
  const errorMessage = writable('');
  const successMessage = writable('');

  if (data.id !== 'new') {
    onMount(() => {
      loadTicket(data.id);
    });
  }

  async function saveData() {
    if (!currentUser || !currentUser.uid) {
      goto('/');
      return;
    }
    if (typeof ticket.employeeID !== 'number') {
      errorMessage.set('Employee ID must be a number.');
      return;
    }
    if (Object.values(ticket).some((field) => field === null || field === '')) {
      errorMessage.set('Please fill in all fields.');
      return;
    }

    if (!isValidEmail(ticket.email)) {
      errorMessage.set('Please provide a valid email address.');
      return;
    }

    // Reset messages
    errorMessage.set('');
    successMessage.set('');

    try {
      const path = `tickets/${data.id}`;
      if (data.id !== 'new') {
        await set(ref(db, path), ticket);
      } else {
        const newTicketRef = push(ref(db, `tickets/`));
        await set(newTicketRef, ticket);
      }
      successMessage.set('Data saved successfully!');
      if (data.id == 'new') ticket = resetTicket();
    } catch (error) {
      errorMessage.set('Error saving data.');
      console.error('Error saving data: ', error);
    }
  }

  onMount(() => {
    return () => {
      unsubscribe();
    };
  });

  async function loadTicket(id: string) {
    const snapshot = await get(ref(db, `tickets/${id}`));
    if (snapshot.exists()) {
      ticket = snapshot.val();
    } else {
      goto('/edit/new');
    }
  }

  let pageTitle = data.id !== 'new' ? `Editing Ticket: ${data.id}` : 'New Ticket';
</script>
