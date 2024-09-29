import { login } from "../../api/auth/login";

export async function onLogin(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const credentials = Object.fromEntries(formData.entries());
  console.log("it worked logging in");
  // Call the login API
  login(credentials);
}

// const form = document.querySelector("#login");
// if (form) {
//   form.addEventListener("submit", onLogin);
// }

// import { router } from "../../router/index.js"; // Adjust the path as necessary

async function handleLoginSuccess() {
  // Save the token to localStorage or a variable
  localStorage.setItem("token", token); // Store the token if needed

  // Navigate to the posts page
  router.navigate("/posts"); // Use the correct path based on your router setup
}
