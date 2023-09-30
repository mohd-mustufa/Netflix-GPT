// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnoYEkpuB6-XIgDqiqYwjrnXEz4rDX7Tc",
  authDomain: "netflixgpt-e12de.firebaseapp.com",
  projectId: "netflixgpt-e12de",
  storageBucket: "netflixgpt-e12de.appspot.com",
  messagingSenderId: "20532793597",
  appId: "1:20532793597:web:c14dc4761fc6868f96ae94",
  measurementId: "G-6G49EMZ1SL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
