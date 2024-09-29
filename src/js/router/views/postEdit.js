import { authGuard } from "../../utilities/authGuard";
import { updatePost } from "../../api/post/";

authGuard();

updatePost({
  id: 2496,
  title: "Example Post is here and it is UPDATED",
  body: "This is also an UPDATED example body",
});
