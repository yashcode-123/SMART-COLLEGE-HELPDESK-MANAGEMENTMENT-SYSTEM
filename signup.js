import { auth }

from "./firebase.js";

import {

  createUserWithEmailAndPassword

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// FORM

const form =
document.getElementById("signupForm");


// SIGNUP EVENT

form.addEventListener("submit",

async (e) => {

  e.preventDefault();

  // GET VALUES

  const name =
  document.getElementById("name").value;

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  const role =
  document.getElementById("role").value;


  try {

    // CREATE ACCOUNT

    await createUserWithEmailAndPassword(

      auth,
      email,
      password

    );

    alert("Account Created Successfully 😭🎉");

    // REDIRECT

    window.location.href =
    "login.html";

  }

  catch(error) {

    console.log(error);

    alert(error.message);

  }

});