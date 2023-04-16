import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { firebaseConfig } from './firebaseConfig';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

class DataStorage {
    constructor(queue, watched) {
        this.queue = queue;
        this.watched = watched;
    }

      get queue() {
          return this.queue;
          
    }
     set queue(newQueue) {
    this.queue = newQueue;

    onAuthStateChanged(auth, user => {
      if (user) {
        const libDataBase = `users/${user.uid}/lib/queue/`;

        update(ref(db, libDataBase), this._queue);
      }
    });
  }
}

