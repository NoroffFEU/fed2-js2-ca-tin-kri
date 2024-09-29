//Should i be removePost to avoid conflict?
// export async function deletePost(id) {}
import { authFetch } from "../authFetch";
import { API_SOCIAL_POSTS } from "../constants";

export async function removePost(id) {
  authFetch(`${API_SOCIAL_POSTS}/${id}`, {
    method: "delete",
  });
}
