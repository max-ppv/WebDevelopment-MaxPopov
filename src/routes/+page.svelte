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
  <meta property="og:image" content="https://{process.env.VERCEL_URL}/logo.png" />
  <meta property="og:url" content="https://{process.env.VERCEL_URL}" />
</svelte:head>

<div class="mb-6 space-y-4">
  <div class="flex items-center space-x-2">
    <span>⌂</span> <a href="/" class="text-gray-700">Home</a>
  </div>
  <div class="flex items-center space-x-2">
    <span>📄</span> <a href="/tickets" class="text-gray-700">All Tickets</a>
  </div>
  <div class="flex items-center space-x-2">
    <span>✎</span> <a href="/edit" class="text-gray-700">Create a Ticket</a>
  </div>
  <div class="flex items-center space-x-2">
    <span>ℹ</span> <a href="/about" class="text-gray-700">About</a>
  </div>
</div>
