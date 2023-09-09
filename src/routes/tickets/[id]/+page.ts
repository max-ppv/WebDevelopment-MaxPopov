import { error } from '@sveltejs/kit';
import { db } from 'service/firebase';
import { ref, onValue } from 'firebase/database';
import type { Ticket } from 'types/ticket';

export async function load({ params }: { params: { id: string } }) {
  console.log('params', params);

  if (!params.id) throw error(404);

  const ticketRef = ref(db, 'tickets/' + params.id);

  return new Promise((resolve, reject) => {
    onValue(
      ticketRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const ticket = { ...snapshot.val(), id: snapshot.key } as Ticket;
          resolve(ticket);
        } else {
          reject(error(404, 'Ticket not found'));
        }
      },
      {
        onlyOnce: true
      }
    );
  });
}
