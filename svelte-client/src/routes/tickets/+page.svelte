<div class="space-y-4">
  {#each tickets as ticket}
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

<!-- Tickets.svelte -->
<script lang="ts">
  import { ref, onValue } from 'firebase/database';
  import type { Ticket } from 'types/ticket';
  import { db } from 'service/firebase';

  type RenderedTicket = Ticket & { id: string };
  let tickets: RenderedTicket[] = [];

  const ticketsRef = ref(db, 'tickets');

  onValue(
    ticketsRef,
    (snapshot) => {
      const data = snapshot.val();
      tickets = Object.keys(data).map((key) => ({ ...data[key], id: key })) as RenderedTicket[];
      console.log('tickets', tickets);
    },
    {
      onlyOnce: true
    }
  );
</script>
