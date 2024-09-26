// export async function onLogin(event) {}

import { login } from "../../api/auth/login";

export async function onLogin(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const credentials = Object.fromEntries(formData.entries());

  // Call the login API
  login(credentials);
}

const form = document.querySelector("#login");
if (form) {
  form.addEventListener("submit", onLogin);
}
