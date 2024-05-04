import { initializeApp } from 'firebase/app'
import { ref, getDatabase } from 'firebase/database' 
import { getAuth } from 'firebase/auth'

// Initialize Firebase
const fb = initializeApp({
  apiKey: "AIzaSyA64Lzpmdn-HovWkOvTtPFecurm9Szaxf8",
  authDomain: "shackhand-autolearn.firebaseapp.com",
  databaseURL: "https://shackhand-autolearn.firebaseio.com",
  projectId: "shackhand-autolearn",
  storageBucket: "shackhand-autolearn.appspot.com",
  messagingSenderId: "270389952986",
  appId: "1:270389952986:web:010827f42571edac5c80e3"
})

export const db = getDatabase(fb)
export const auth = getAuth(fb)
export const placesRef = ref(db, 'places')
// export const handsRef = ref(db, 'hands')
export const usersRef = ref(db, 'users')
export const chatsRef = ref(db, 'chats')
export const groupsRef = ref(db, 'groups')