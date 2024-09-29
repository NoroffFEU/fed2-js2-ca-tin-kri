import { API_SOCIAL_POSTS, API_KEY } from "../constants"; // Ensure constants are imported

export async function createPost(postData) {
  const token = localStorage.getItem("token"); // Fetch token from localStorage

  if (!token) {
    throw new Error("No token found, please login first.");
  }

  const response = await fetch(API_SOCIAL_POSTS, {
    // No extra "/post" here
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": API_KEY,
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error("Failed to create post");
  }

  return response.json(); // Return the JSON response
}
