
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBLcdUbGKSoTiyOEp2V_8CtwF6_vo0n5-I",
    authDomain: "smart-help-1f848.firebaseapp.com",
    projectId: "smart-help-1f848",
    storageBucket: "smart-help-1f848.firebasestorage.app",
    messagingSenderId: "1067114700859",
    appId: "1:1067114700859:web:0c3cbecc18b0385a2b3c1e",
    measurementId: "G-HGSV08H8GG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  const analytics = getAnalytics(app);
