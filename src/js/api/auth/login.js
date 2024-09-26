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
import { API_AUTH_LOGIN } from "../constants";

const action = "/auth/login";
const method = "post";

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

    // Access the token from the nested data object
    const token = result.data && result.data.accessToken;

    if (token) {
      localStorage.setItem("accessToken", token);
      console.log("Token stored successfully:", token);
    } else {
      console.error("Token not found in the response.");
    }
  } catch (error) {
    console.error("Login error:", error);
  }
}
