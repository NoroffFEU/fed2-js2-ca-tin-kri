import { API_SOCIAL_POSTS } from "../constants";
import { authFetch } from "../authFetch";

export async function readPost(id) {
  const response = await authFetch(
    `${API_SOCIAL_POSTS}/${id}?${queryParams.toString()}`
  );

  await handleErrors(response);

  const post = await response.json();
  return post.data;
}

export async function readPosts(limit = 12, page = 1, tag) {
  const response = await authFetch(
    `${API_SOCIAL_POSTS}?${queryParams.toString()}`
  );

  const result = await response.json();
  const posts = result.data;
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
// URL search params and auth fetch ith user name
//And SOCIAL_PROFILES import
