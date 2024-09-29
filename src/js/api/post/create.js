import { authFetch } from "../authFetch";
import { API_SOCIAL_POSTS } from "../constants";

export async function createPost({ title, body, tags, media }) {
  const method = "POST";

  const response = await authFetch(`${API_SOCIAL_POSTS}`, {
    method,
    body: JSON.stringify({ title, body, tags, media }),
  });

  if (response.ok) {
    alert("Post created successfully!");
  } else {
    throw new Error("Failed to create the post");
  }

  return await response.json();
}
