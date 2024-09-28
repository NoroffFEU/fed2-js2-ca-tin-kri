// // // // export async function login({ email, password }) {}

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

import { API_AUTH_LOGIN } from "../constants";
import * as storage from "../../storage/storage.js"; // Use storage for managing token and profile

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

    // Extract token from the response
    const token = result.data && result.data.accessToken;

    if (token) {
      // Store the token
      storage.save("accessToken", token);
      console.log("Token stored successfully:", token);

      // Store user profile
      const user = { ...result.data };
      delete user.accessToken;
      storage.save("profile", user);

      // Alert or navigate to another page if needed
      alert("You are now logged in!");
    } else {
      console.error("Token not found in the response.");
    }
  } catch (error) {
    console.error("Login error:", error);
  }
}
