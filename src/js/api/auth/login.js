//----all this code works and returns a 200
// import { API_AUTH_LOGIN } from "../constants";
// import * as storage from "../../storage/storage.js"; // Use storage for managing token and profile

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

//     // Extract token from the response
//     const token = result.data && result.data.accessToken;

//     if (token) {
//       // Store the token
//       storage.save("accessToken", token);
//       console.log("Token stored successfully:", token);

//       // Store user profile
//       const user = { ...result.data };
//       delete user.accessToken;
//       storage.save("profile", user);

//       // Alert or navigate to another page if needed
//       alert("You are now logged in!");
//     } else {
//       console.error("Token not found in the response.");
//     }
//   } catch (error) {
//     console.error("Login error:", error);
//   }
// }
//----------------

import { API_AUTH_LOGIN } from "../constants";
import * as storage from "../../storage/storage";

const method = "post";

export async function login(profile) {
  const loginURL = API_AUTH_LOGIN;
  console.log(loginURL);
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const {
    data: { accessToken, ...user },
  } = await response.json();

  console.log("Token stored successfully:", accessToken);

  if (accessToken) {
    storage.save("token", accessToken);
    storage.save("profile", user);
    console.log("User profile stored successfully:", user);
  } else {
    console.error("Failed to get access to token");
  }
  alert("You are now logged in!");
}
