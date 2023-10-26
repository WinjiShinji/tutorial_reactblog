// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHNppAhd7N36rVWkSbNvyT-_UicU_tCFI",
  authDomain: "projectstestdata-ff901.firebaseapp.com",
  databaseURL: "https://projectstestdata-ff901-default-rtdb.firebaseio.com",
  projectId: "projectstestdata-ff901",
  storageBucket: "projectstestdata-ff901.appspot.com",
  messagingSenderId: "1050903446254",
  appId: "1:1050903446254:web:1f9ca5d3550cd07032e9ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database }
