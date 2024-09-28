// // export async function login({ email, password }) {}

<<<<<<< HEAD
//---This code shows createpost but lots of errors---------------------

import { API_AUTH_LOGIN } from "../constants";
import { save } from "../../storage/storage.js";
import { createPost } from "../post/create.js"; // Import createPost function
=======
// import { API_AUTH_LOGIN } from "../constants";

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
//       method,
//       body,
//     });

//     if (!response.ok) {
//       throw new Error("Login failed");
//     }

//     const result = await response.json();
//     console.log("API Response:", result);

//     // localStorage.setItem("token", result.accessToken);
//     console.log("This is your received token:", token);
//     localStorage.setItem("accessToken", token);

//     console.log("Login successful:", result);
//     // Save token or handle successful login here
//   } catch (error) {
//     console.error("Login error:", error);
//   }
// }

// const token = localStorage.getItem("token");
import { API_AUTH_LOGIN } from "../constants";

const action = "/auth/login";
const method = "post";
<<<<<<< HEAD
>>>>>>> parent of 4358228 (removed redundant code)
=======
>>>>>>> parent of 4358228 (removed redundant code)

export async function login({ email, password }) {
  const loginURL = API_AUTH_LOGIN;
  const body = JSON.stringify({ email, password });

  try {
    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });

    if (!response.ok) {
      throw new Error("Login failed. Status: " + response.status);
    }

    const result = await response.json();
    console.log("API Response:", result); // Log the full API response

<<<<<<< HEAD
<<<<<<< HEAD
    // Store the token in localStorage
=======
    // Access the token from the nested data object
>>>>>>> parent of 4358228 (removed redundant code)
    const token = result.data && result.data.accessToken;
    if (token) {
<<<<<<< HEAD
      save("token", token); // Use a single key for storing the token
=======
      localStorage.setItem("accessToken", token);
>>>>>>> parent of 4358228 (removed redundant code)
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
=======
    // Access the token from the nested data object
    const token = result.data && result.data.accessToken;

    if (token) {
      localStorage.setItem("accessToken", token);
      console.log("Token stored successfully:", token);
    } else {
      console.error("Token not found in the response.");
    }
>>>>>>> parent of 4358228 (removed redundant code)
  } catch (error) {
    console.error("Login error:", error);
  }
}
<<<<<<< HEAD

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
=======
>>>>>>> parent of 4358228 (removed redundant code)
