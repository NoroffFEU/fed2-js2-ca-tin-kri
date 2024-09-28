// export async function readPost(id) {}

// export async function readPosts(limit = 12, page = 1, tag) {}

// export async function readPostsByUser(username, limit = 12, page = 1, tag) {}

//-- new session work
// export async function getPosts() {}

// export async function getPost(id) {}

import { authFetch } from "../authFetch";
import { API_SOCIAL_POSTS } from "../constants";

// Fetch a single post by ID
export async function getPost(id) {
  const getPostURL = `${API_SOCIAL_POSTS}/posts/${id}`; // Adjust the endpoint if necessary

  try {
    const response = await authFetch(getPostURL, { method: "GET" });

    if (!response.ok) {
      throw new Error(`Failed to fetch post with ID: ${id}`);
    }

    const post = await response.json();
    return post;
  } catch (error) {
    console.error(`Error fetching post with ID: ${id}`, error);
    return null;
  }
}
