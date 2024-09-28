// export async function createPost(postData)

// export async function createPost({ title, body, tags, media }) {
//   const createPostURL = API_SOCIAL_POSTS;
//   const token = load("accessToken");
//   const response = await fetch(createPostURL, {
//     headers: {
//       "Content-type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({ title, body, tags, media }),
//   });
// }

// --- old code
// import { API_SOCIAL_POSTS } from "../constants"; // Assuming this is where the constant is defined
// import { load } from "../../storage/storage.js"; // Assuming this is where the load function is defined

// export async function createPost({ title, body, tags, media }) {
//   const createPostURL = API_SOCIAL_POSTS; // URL for creating a new post
//   const token = load("token"); // Retrieve the stored authentication token

//   // Perform the fetch request to the server to create a new post
//   const response = await fetch(createPostURL, {
//     method: "POST", // Specify the HTTP method (default is GET)
//     headers: {
//       "Content-Type": "application/json", // Indicate that the body is in JSON format
//       Authorization: `Bearer ${token}`, // Include the token for authorization
//     },
//     body: JSON.stringify({ title, body, tags, media }), // Send the post data as a JSON string
//   });

//   // Handle the response as needed (e.g., check for success, parse JSON, etc.)
//   if (!response.ok) {
//     throw new Error(`Failed to create post. Status: ${response.status}`);
//   }

//   const result = await response.json(); // Parse the JSON response if needed
//   return result; // Return the result, or handle it as needed
// }

///-----code from 2809 before 14.00
// import { authFetch } from "../authFetch";
// import { API_SOCIAL_POSTS } from "../constants";
// import { getPost } from "./read";
// const action = "/posts";
// const method = "post";

// export async function createPost(postData) {
//   const createPostURL = API_SOCIAL_POSTS + action;

//   const response = await authFetch(createPostURL, {
//     method,
//     body: JSON.stringify(postData),
//   });

//   const post = await response.json();
//   console.log(getPost);
// }

// import { authFetch } from "../authFetch";
// import { API_SOCIAL_POSTS } from "../constants";
// import { getPost } from "./read"; // Adjust the path if necessary
// const action = "/posts";
// const method = "post";

// export async function createPost(postData) {
//   console.log("createPost function called with data:", postData); // Log to verify the function call

//   const createPostURL = API_SOCIAL_POSTS;

//   try {
//     const response = await authFetch(createPostURL, {
//       method,
//       body: JSON.stringify(postData),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to create post");
//     }

//     const createdPost = await response.json();
//     console.log("Created post:", createdPost); // Log the created post
//     return createdPost;
//   } catch (error) {
//     console.error("Error creating post:", error);
//   }
// }
import { authFetch } from "../authFetch";
import { API_SOCIAL_POSTS } from "../constants";

export async function createPost(postData) {
  console.log("createPost function called with data:", postData); // Log to verify the function call

  const createPostURL = API_SOCIAL_POSTS;

  try {
    const response = await authFetch(createPostURL, {
      method: "POST",
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      const errorResponse = await response.json(); // Get error details
      console.error("Server response error:", errorResponse);
      throw new Error("Failed to create post: " + errorResponse.message);
    }

    const createdPost = await response.json();
    console.log("Created post:", createdPost); // Log the created post
    return createdPost;
  } catch (error) {
    console.error("Error creating post:", error);
  }
}
