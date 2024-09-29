import { API_SOCIAL_POSTS } from "../constants";
import { authFetch } from "../authFetch";

export async function readPost(id) {}

export async function readPosts(limit = 12, page = 1, tag) {
  const response = await authFetch(API_SOCIAL_POSTS);
  return await response.json();
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
//readPost same as getPost
