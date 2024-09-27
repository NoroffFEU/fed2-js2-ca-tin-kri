// // export async function login({ email, password }) {}

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

//code redundant? 27.09
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
//       method,
//       body,
//     });

//     if (!response.ok) {
//       throw new Error("Login failed. Status: " + response.status);
//     }

//     const result = await response.json();
//     console.log("API Response:", result);

//     const token = result.data && result.data.accessToken;

//     if (token) {
//       localStorage.setItem("accessToken", token);
//       console.log("Token stored successfully:", token);
//     } else {
//       console.error("Token not found in the response.");
//     }
//   } catch (error) {
//     console.error("Login error:", error);
//   }

//   //new code for storing token and profile details separately
//   const { accessToken, ...user } = await response.json;
//   storage.save("token", accessToken);
//   storage.save("profile", user);
// }
// ------

import { API_AUTH_LOGIN } from "../constants";
import * as storage from "../../storage/storage.js";

// ---- redundant code?
// const action = "/auth/login";
// const method = "post";

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

    const token = result.data && result.data.accessToken;

    if (token) {
      // Store only accessToken, remove other tokens
      localStorage.setItem("accessToken", token);
      storage.save("accessToken", token); // Store using `accessToken` key only
      console.log("Token stored successfully:", token);

      // Store the rest of the user profile
      const user = { ...result.data };
      delete user.accessToken;

      storage.save("profile", user);
    } else {
      console.error("Token not found in the response.");
    }
  } catch (error) {
    console.error("Login error:", error);
  }
  alert("You are now logged in!");
}
