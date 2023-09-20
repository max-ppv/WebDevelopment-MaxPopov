<svelte:head>
  <title>Navigation - Ticket Manager</title>
  <meta
    name="description"
    content="Navigate through the Ticket Manager app. Here you can find links to home, all tickets, create a ticket, and about pages."
  />

  <!-- Open Graph Tags -->
  <meta property="og:title" content="Navigation - Ticket Manager" />
  <meta
    property="og:description"
    content="Navigate through the Ticket Manager app. Here you can find links to home, all tickets, create a ticket, and about pages."
  />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="{import.meta.env.VITE_BASE_URL}/logo.png" />
  <meta property="og:url" content={import.meta.env.VITE_BASE_URL} />
</svelte:head>

<div class="mb-6 space-y-4">
  <a href="/tickets" class="block px-4 py-2 text-gray-700 border rounded">All Tickets</a>
  <a href="/edit" class="block px-4 py-2 text-gray-700 border rounded">Create a Ticket</a>
  <a href="/about" class="block px-4 py-2 text-gray-700 border rounded">About</a>
</div>
