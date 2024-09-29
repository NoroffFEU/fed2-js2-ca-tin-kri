import { authGuard } from "../../utilities/authGuard";
import { createPost } from "../../api/post";

authGuard();

const form = document.forms.createPost;

form.addEventListener("submit", createPost);

alert("Single Post Page");

createPost({
  title: "the best Example Post is here",
  body: "also a good, but not the best example body",
});
