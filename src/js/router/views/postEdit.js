// import { onUpdatePost } from "../../ui/post/update";
// import { authGuard } from "../../utilities/authGuard";
// import { populateForm } from "../../utilities/populateForm";

// //Genius function from maddie
// function init() {
//   authGuard();

//   populateForm();

//   const form = document.forms.editPost;
//   form.addEventListener("submit", onUpdatePost);
// }

// init();

import { onUpdatePost } from "../../ui/post/update";
import { authGuard } from "../../utilities/authGuard";
import { populateForm } from "../../utilities/populatePostFormToEdit";

function init() {
  authGuard();

  populateForm();

  const form = document.forms.editPost;
  form.addEventListener("submit", onUpdatePost);
}

init();
