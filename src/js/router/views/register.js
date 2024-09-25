import { onRegister } from "../../ui/auth/register";

// const form = document.forms.register;

// form.addEventListener("submit", onRegister);

const form = document.querySelector("#register");
if (form) {
  form.addEventListener("submit", onRegister);
}
