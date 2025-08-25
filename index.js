const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const cancelBtn = document.getElementById("cancelBtn");
const monkey = document.getElementById("monkey");

// Show / Hide password + change emoji
togglePassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.textContent = "Hide Password";
    monkey.textContent = "🙈"; 
  } else {
    password.type = "password";
    togglePassword.textContent = "Show Password";
    monkey.textContent = "🐒"; 
  }

  // bounce effect
  monkey.classList.add("bounce");
  setTimeout(() => monkey.classList.remove("bounce"), 300);
});

// Validation for username and password length
function validateInput(input) {
  if (input.value.length >= 8) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}

username.addEventListener("input", () => validateInput(username));
password.addEventListener("input", () => validateInput(password));

// Form submit validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  if (username.value.trim() === "" || password.value.trim() === "") {
    alert("Please fill the form first");
  } else {
    alert("Form submitted successfully!");
    form.reset();
    username.classList.remove("valid", "invalid");
    password.classList.remove("valid", "invalid");
    togglePassword.textContent = "Show Password";
    monkey.textContent = "🐒"; // reset monkey
  }
});

// Reset clears validation borders + reset emoji
cancelBtn.addEventListener("click", () => {
  username.classList.remove("valid", "invalid");
  password.classList.remove("valid", "invalid");
  togglePassword.textContent = "Show Password";
  monkey.textContent = "🐒";
});
