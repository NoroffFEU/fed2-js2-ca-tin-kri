import { login } from "../../api/auth/login";

export async function onLogin(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const credentials = Object.fromEntries(formData.entries()); // Extract credentials from form data

  try {
    await login(credentials); // Pass credentials to the login function
    console.log("Login successful!");
    alert("You are logged in"); // Alert the user when login is successful
  } catch (error) {
    console.error("Login failed:", error.message, "error");
    alert("Login failed. Please check your credentials and try again.");
  }
}
