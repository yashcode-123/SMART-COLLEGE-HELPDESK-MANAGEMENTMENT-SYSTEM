 console.log("js file connected");
 // Firebase Imports

import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

  getFirestore,
  collection,
  addDoc

} from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// FIREBASE CONFIG

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

const db = getFirestore(app);

// FORM

const form = document.getElementById("complaintForm");


// SUBMIT EVENT

form.addEventListener("submit", async (e) => {
    e.preventDefault(); 

    // GET VALUES 
    const title = document.getElementById("title").value; 
    const category = document.getElementById("category").value; 
    const description = document.getElementById("description").value; 

    // SAVE DATA TO FIRESTORE 
    try { 
        await addDoc(collection(db, "complaints"), { 
            title, 
            category, 
            description, 
            status: "Pending", // Set default status
            createdAt: new Date().toISOString() 
        }); 
        
        alert("Complaint Submitted Successfully 🎉"); 
        form.reset(); 
    } catch (error) { 
      
        console.log("error");
        alert(error.message);
    } 
});
