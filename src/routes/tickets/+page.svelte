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
  {#each data.tickets as ticket}
    <div class="p-4 border rounded shadow-sm">
      <h3 class="text-xl font-bold">
        <a href={`tickets/${ticket.id}`}>
          {ticket.firstName}
          {ticket.lastName}
        </a>
      </h3>
      <p>Resolved: {ticket.resolved}</p>
    </div>
  {/each}
</div>

<script lang="ts">
  export let data;
</script>
