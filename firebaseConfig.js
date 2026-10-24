
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMpx3U21sN0BQwRESyk9tYboWF9csnxiU",
  authDomain: "fir-database-5a0a7.firebaseapp.com",
  projectId: "fir-database-5a0a7",
  storageBucket: "fir-database-5a0a7.firebasestorage.app",
  messagingSenderId: "697630272898",
  appId: "1:697630272898:web:380a95b64732c23c2af39b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
