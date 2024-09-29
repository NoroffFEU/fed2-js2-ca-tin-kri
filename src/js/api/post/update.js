// //updatePost(id, { title, body, tags, media }) {}
// import { API_SOCIAL_POSTS, API_KEY } from "../constants"; // Ensure constants are imported
// import { authFetch } from "../authFetch";

// const action = "/posts";
// const method = "put";

// export async function updatePost(id) {
//   const updatePostURL = `${API_SOCIAL_POSTS}${action}/${post.Data.id}`;
//   const response = await authFetch(updatePostURL, {
//     method,
//     body: JSON.stringify(postData),
//   });

//   return await response.json();
// }
import { API_SOCIAL_POSTS, API_KEY } from "../constants";

export async function updatePost(id, postData) {
  const token = localStorage.getItem("token"); // Ensure token is fetched

  if (!token) {
    throw new Error("No token found, please login first.");
  }

  // Ensure 'id' is a string or number and not an object
  if (typeof id !== "string" && typeof id !== "number") {
    throw new Error("Invalid post ID. Expected a string or number.");
  }

  // Construct the correct URL with the post ID
  const updatePostURL = `${API_SOCIAL_POSTS}/${id}`; // Correct URL with valid ID

  const response = await fetch(updatePostURL, {
    method: "PUT", // Use the PUT method
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Send the token for authentication
      "X-Noroff-API-Key": API_KEY, // Send the API key
    },
    body: JSON.stringify(postData), // Send the updated post data in the request body
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error("Failed to update post: " + errorResponse.message);
  }

  return response.json(); // Return the JSON response (the updated post)
}
