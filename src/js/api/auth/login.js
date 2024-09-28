// // export async function login({ email, password }) {}

//---This code shows createpost but lots of errors---------------------

import { API_AUTH_LOGIN } from "../constants";
import { save } from "../../storage/storage.js";
import { createPost } from "../post/create.js"; // Import createPost function

export async function login({ email, password }) {
  const loginURL = API_AUTH_LOGIN;
  const body = JSON.stringify({ email, password });

  try {
    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
    });

    if (!response.ok) {
      throw new Error("Login failed. Status: " + response.status);
    }

    const result = await response.json();
    console.log("API Response:", result);

    // Store the token in localStorage
    const token = result.data && result.data.accessToken;
    if (token) {
      save("token", token); // Use a single key for storing the token
      console.log("Token stored successfully:", token);
    } else {
      console.error("Token not found in the response.");
      return;
    }

    // Optional: Store user profile data
    const userProfile = { ...result.data };
    delete userProfile.accessToken;
    save("profile", userProfile);

    alert("You are now logged in!");

    // Call post creation after login success
    await handlePostCreation(); // Ensure this is called correctly
  } catch (error) {
    console.error("Login error:", error);
  }
}

async function handlePostCreation() {
  console.log("Creating post..."); // Verify function call

  const postData = {
    title: "Post Example",
    body: "Also an example",
  };

  const createdPost = await createPost(postData);
}

//-----this works for api resone for token and register but shows no post
// import { API_AUTH_LOGIN } from "../constants";
// import * as storage from "../../storage/storage.js";

// const action = "/auth/login";
// const method = "post";

// export async function login({ email, password }) {
//   const loginURL = API_AUTH_LOGIN;
//   const body = JSON.stringify({ email, password });

//   try {
//     const response = await fetch(loginURL, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       method: "post",
//       body,
//     });

//     if (!response.ok) {
//       throw new Error("Login failed. Status: " + response.status);
//     }

//     const result = await response.json();
//     console.log("API Response:", result);

//     const token = result.data && result.data.accessToken;

//     if (token) {
//       // Store only accessToken, remove other tokens
//       localStorage.setItem("accessToken", token);
//       storage.save("accessToken", token); // Store using `accessToken` key only
//       console.log("Token stored successfully:", token);

//       // Store the rest of the user profile
//       const user = { ...result.data };
//       delete user.accessToken;

//       storage.save("profile", user);
//     } else {
//       console.error("Token not found in the response.");
//     }
//   } catch (error) {
//     console.error("Login error:", error);
//   }
//   alert("You are now logged in!");
// }
