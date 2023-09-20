<svelte:head>
  <title>{data.firstName} {data.lastName} - Ticket Details</title>
  <meta name="description" content={data.problem} />

  <!-- Open Graph Tags -->
  <meta property="og:title" content="{data.firstName} {data.lastName} - Ticket Details" />
  <meta property="og:description" content={data.problem} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="{import.meta.env.VITE_BASE_URL}/logo.png" />
  <meta property="og:url" content="{import.meta.env.VITE_BASE_URL}/edit/{data.id}" />
</svelte:head>

<div class="space-y-4">
  <a href="/tickets" class="block px-4 py-2 text-gray-700 border rounded">Back to all tickets</a>

  <div class="ticket">
    <h2 class="text-xl">{data.firstName} {data.lastName}</h2>
    <p>
      <strong>Employee ID:</strong>
      {data.employeeID ? data.employeeID : 'N/A'}
    </p>
    <p><strong>Email:</strong> {data.email}</p>
    <p><strong>Problem Type:</strong> {data.problemType}</p>
    <p><strong>Problem:</strong> {data.problem}</p>
    <p><strong>Resolved:</strong> {data.resolved}</p>
    <p><strong>Id:</strong> {data.id}</p>
  </div>
  <!-- <div class="grid grid-cols-3 gap-8"> -->
  <button
    on:click={deleteTicket}
    class="w-full px-4 py-2 text-gray-700 border border-red-200 rounded">Delete Ticket</button
  >
  <button
    on:click={toggleResolve}
    class="w-full px-4 py-2 text-gray-700 border {data.resolved === 'yes'
      ? 'border-blue-200'
      : 'border-green-200'} rounded"
  >
    {data.resolved === 'yes' ? 'Unresolve' : 'Quick Resolve'}
  </button>
  <button on:click={editTicket} class="w-full px-4 py-2 text-gray-700 border rounded"
    >Edit Ticket</button
  >
  <!-- </div > -->
</div>

<script lang="ts">
  import { ref, remove, set } from 'firebase/database';
  import { db } from 'service/firebase';
  import { goto } from '$app/navigation';
  import type { Ticket } from 'types/ticket';

  type ExtendedTicket = Ticket & {
    id: string;
  };
  export let data: ExtendedTicket;

  async function deleteTicket() {
    goto('/tickets');
    const ticketRef = ref(db, `tickets/${data.id}`);
    await remove(ticketRef);
  }
  function editTicket() {
    goto(`/edit/${data.id}`);
  }
  async function toggleResolve() {
    const ticketRef = ref(db, `tickets/${data.id}`);
    const newResolvedStatus = data.resolved === 'yes' ? 'no' : 'yes'; // Toggle the resolved status
    await set(ticketRef, { ...data, resolved: newResolvedStatus });
    data.resolved = newResolvedStatus; // Update local data to reflect the change
  }
</script>
