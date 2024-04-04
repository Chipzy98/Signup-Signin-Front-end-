const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function validateForm() {
  // Get form elements
  var username = document.forms["loginForm"]["username"].value;
  var password = document.forms["loginForm"]["password"].value;

  // Check if username and password match the credentials
  if (username === "admin" && password === "1234") {
    // Redirect to dashboard.html if credentials match
    window.location.href = "dashboard.html";
    return false; // Prevent form submission
  } else {
    // Show an error message if credentials do not match
    alert("Incorrect username or password");
    return false; // Prevent form submission
  }
}

// Function to validate the form
function validateSignUpForm() {
  // Get form elements
  var username = document.forms["signUpForm"]["username"].value;
  var email = document.forms["signUpForm"]["email"].value;
  var password = document.forms["signUpForm"]["password"].value;

  // Check if any field is empty
  if (username == "" || email == "" || password == "") {
    alert("All fields must be filled out");
    return false;
  }

  // You can add more validations here as needed

  // If all validations pass, submit the form
  return true;
}