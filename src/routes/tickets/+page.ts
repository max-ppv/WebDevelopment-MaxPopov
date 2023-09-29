// src/routes/tickets/+page.server.ts
import { ref, onValue } from 'firebase/database';
import { db } from 'service/firebase';
import type { Ticket } from 'types/ticket';

export const load = async () => {
  type RenderedTicket = Ticket & { id: string };

  const ticketsRef = ref(db, 'tickets');

  const tickets: RenderedTicket[] = await new Promise((resolve) => {
    onValue(
      ticketsRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const formattedTickets = Object.keys(data).map((key) => ({
            ...data[key],
            id: key
          })) as RenderedTicket[];
          resolve(formattedTickets);
        } else {
          resolve([]);
        }
      },
      {
        onlyOnce: true
      }
    );
  });
  return { tickets };
};
