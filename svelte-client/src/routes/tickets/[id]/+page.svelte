<h1>Ticket Details</h1>

<div class="ticket">
  <h2>{data.firstName} {data.lastName}</h2>
  <p><strong>Employee ID:</strong> {data.employeeID ? data.employeeID : 'N/A'}</p>
  <p><strong>Email:</strong> {data.email}</p>
  <p><strong>Problem Type:</strong> {data.problemType}</p>
  <p><strong>Problem:</strong> {data.problem}</p>
  <p><strong>Status:</strong> {data.resolved}</p>
  <p><strong>Id:</strong> {data.id}</p>

  <button
    on:click={deleteTicket}
    class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow">Delete Ticket</button
  >
</div>

<script lang="ts">
  import { ref, remove } from 'firebase/database';
  import { db } from 'service/firebase';
  import { goto } from '$app/navigation';
  export let data;

  async function deleteTicket() {
    const ticketRef = ref(db, `tickets/${data.id}`);
    await remove(ticketRef);
    goto('/tickets');
  }
</script>
