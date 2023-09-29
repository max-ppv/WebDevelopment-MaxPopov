<svelte:head>
  <title>List of Tickets - Your Service Name</title>
  <meta name="description" content="Browse the list of tickets and their status in our system." />

  <!-- Open Graph Tags -->
  <meta property="og:title" content="List of Tickets" />
  <meta
    property="og:description"
    content="Browse the list of tickets and their status in our system."
  />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="{import.meta.env.VITE_BASE_URL}/logo.png" />
  <meta property="og:url" content="{import.meta.env.VITE_BASE_URL}/tickets" />
</svelte:head>

<div class="space-y-4">
  {#if $user}
    <a href="/edit" class="block px-4 py-2 text-gray-700 border rounded">Create a Ticket</a>
  {:else}
    <a href="/login" class="block px-4 py-2 text-gray-700 border border-green-200 rounded"
      >Login to create a Ticket</a
    >
  {/if}
  {#each data.tickets as ticket}
    <a class="block" href={`tickets/${ticket.id}`}>
      <div
        class="ticket border p-4 rounded {ticket.resolved == 'yes'
          ? 'border-blue-200'
          : 'border-red-200'}"
      >
        <h3 class="text-xl font-bold">
          {ticket.firstName}
          {ticket.lastName}
        </h3>
        <p>Resolved: {ticket.resolved}</p>
      </div>
    </a>
  {/each}
</div>

<script lang="ts">
  import { user } from 'service/authstore';
  import type { Ticket } from 'types/ticket';
  type ExtendedTicket = Ticket & {
    id: string;
  };
  export let data: {
    tickets: ExtendedTicket[];
  };
</script>
