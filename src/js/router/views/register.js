// this page is the same as src/js/index.js in video mark 40:11
import { onRegister } from "../../ui/auth/register";

// const form = document.forms.register;

// form.addEventListener("submit", onRegister);

const form = document.querySelector("#register");
if (form) {
  form.addEventListener("submit", onRegister);
}
