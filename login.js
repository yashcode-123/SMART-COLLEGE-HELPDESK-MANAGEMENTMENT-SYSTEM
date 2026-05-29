import { auth }

from "./firebase.js";

import {

  signInWithEmailAndPassword

}

from

"https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";


// FORM

const form =
document.getElementById("loginForm");


// LOGIN EVENT

form.addEventListener("submit",

async (e) => {

  e.preventDefault();

  // GET VALUES

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;


  try {

    // LOGIN USER

    await signInWithEmailAndPassword(

      auth,
      email,
      password

    );

    alert("Login Successful 😭🔥");

    // REDIRECT

    window.location.href =
    "dashboard.html";

  }

  catch(error) {

    console.log(error);

    alert(error.message);

  }

});