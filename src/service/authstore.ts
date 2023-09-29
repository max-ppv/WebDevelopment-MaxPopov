import { writable } from 'svelte/store';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';
import type { Writable } from 'svelte/store';
import { app } from 'service/firebase';

export interface User {
  isLoggedIn: boolean;
  uid?: string;
}

const user: Writable<User | null> = writable(null);
const auth = getAuth(app);

onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
  if (firebaseUser) {
    user.set({
      isLoggedIn: true,
      uid: firebaseUser.uid
    });
  } else {
    user.set(null);
  }
});

export { user };
