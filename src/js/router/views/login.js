import { onLogin } from "../../ui/auth/login";

function logIn() {
  const form = document.forms.login;
  if (!form) {
    console.error("Login form not found");
    return;
  }
  console.log("Login form found:", form); // Log to confirm form is selected
  form.addEventListener("submit", onLogin);
}

logIn();
