import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// App's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAp-2NvoBkZpQRoHKjxRSn2YQJo43SN20",
  authDomain: "meal-dealio.firebaseapp.com",
  projectId: "meal-dealio",
  storageBucket: "meal-dealio.appspot.com",
  messagingSenderId: "643657776109",
  appId: "1:643657776109:web:eabdfdb0263165203745e4",
  measurementId: "G-1XEWHQ99BH"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()

export { db }