// script.js

function validateRegisterForm() {
    const name = document.forms["registerForm"]["name"].value;
    const email = document.forms["registerForm"]["email"].value;
    const password = document.forms["registerForm"]["password"].value;
    const confirm = document.forms["registerForm"]["confirm"].value;
  
    if (!name || !email || !password || !confirm) {
      alert("All fields must be filled out");
      return false;
    }
  
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Enter a valid email");
      return false;
    }
  
    if (password !== confirm) {
      alert("Passwords do not match");
      return false;
    }
  
    return true;
  }
  
  function validateLoginForm() {
    const email = document.forms["loginForm"]["email"].value;
    const password = document.forms["loginForm"]["password"].value;
  
    if (!email || !password) {
      alert("Both fields are required");
      return false;
    }
    return true;
  }
  