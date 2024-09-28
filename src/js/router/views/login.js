import { onLogin } from "../../ui/auth/login";

// const form = document.forms.login;

// form.addEventListener("submit", onLogin);

const form = document.querySelector("#login");
if (form) {
  form.addEventListener("submit", onLogin);
}
