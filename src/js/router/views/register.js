// // this page is the same as src/js/index.js in video mark 40:11
// import { onRegister } from "../../ui/auth/register";

// // const form = document.forms.register;

// // form.addEventListener("submit", onRegister);

// const form = document.querySelector("#register");
// if (form) {
//   form.addEventListener("submit", onRegister);
// }
// // in 58:50 2 event listneres cant be at the same time so
// //makes sense to use src/js/router/views/login.js
import { setLogoutListener } from "../../ui/global/logout";
import { renderPostsByUser } from "../../ui/post/read";
import { profileTemplate } from "../../ui/templates/profileTemplate";
import { authGuard } from "../../utilities/authGuard";

function register() {
  authGuard();
  profileTemplate();
  renderPostsByUser();
  setLogoutListener();
}

register();
