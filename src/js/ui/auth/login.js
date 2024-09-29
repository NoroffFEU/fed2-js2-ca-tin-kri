import { login } from "../../api/auth/login";

export async function onLogin(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const credentials = Object.fromEntries(formData.entries());
  console.log("it worked logging in");
  alert("You are logged in");
}
