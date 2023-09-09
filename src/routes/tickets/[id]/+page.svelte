<script lang="ts">
  import { ref, remove } from "firebase/database";
  import { db } from "service/firebase";
  import { goto } from "$app/navigation";
  import type { Ticket } from "types/ticket";

  type ExtendedTicket = Ticket & {
    id: string;
  };
  export let data: ExtendedTicket;

  async function deleteTicket() {
    const ticketRef = ref(db, `tickets/${data.id}`);
    await remove(ticketRef);
    goto("/tickets");
  }
  function editTicket() {
    goto(`/edit/${data.id}`);
  }
</script>

<svelte:head>
  <title>{data.firstName} {data.lastName} - Ticket Details</title>
  <meta name="description" content={data.problem} />

  <!-- Open Graph Tags -->
  <meta
    property="og:title"
    content="{data.firstName} {data.lastName} - Ticket Details"
  />
  <meta property="og:description" content={data.problem} />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="{import.meta.env.VITE_BASE_URL}/logo.png"
  />
  <meta
    property="og:url"
    content="{import.meta.env.VITE_BASE_URL}/edit/{data.id}"
  />
</svelte:head>

<h1>Ticket Details</h1>

<div class="ticket">
  <h2>{data.firstName} {data.lastName}</h2>
  <p>
    <strong>Employee ID:</strong>
    {data.employeeID ? data.employeeID : "N/A"}
  </p>
  <p><strong>Email:</strong> {data.email}</p>
  <p><strong>Problem Type:</strong> {data.problemType}</p>
  <p><strong>Problem:</strong> {data.problem}</p>
  <p><strong>Status:</strong> {data.resolved}</p>
  <p><strong>Id:</strong> {data.id}</p>

  <button
    on:click={deleteTicket}
    class="px-4 py-2 text-white bg-red-500 rounded shadow hover:bg-red-600"
    >Delete Ticket</button
  >
  <button
    on:click={editTicket}
    class="px-4 py-2 mr-4 text-white bg-blue-500 rounded shadow hover:bg-blue-600"
    >Edit Ticket</button
  >
</div>
