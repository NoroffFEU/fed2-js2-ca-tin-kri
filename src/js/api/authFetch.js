// // ---- authorized fetch  no need for this one? token is stored in local on js/api/auth/login.js
// //
// import { load } from "../storage/storage";
const action = "/posts";

export function headers() {
  const token = load("accessToken");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
}

export async function authFetch(url, options) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
// import { load } from "../storage/storage";

// export function headers() {
//   const token = load("token");
//   console.log("Loaded token in authFetch:", token); // Log the token to ensure it's loaded correctly

//   if (!token) {
//     console.error("No token found in localStorage.");
//     return {
//       "Content-Type": "application/json",
//     };
//   }

//   return {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`, // Ensure the token is correctly formatted
//   };
// }

// export async function authFetch(url, options) {
//   const requestOptions = {
//     ...options,
//     headers: headers(), // Include headers with Authorization token
//   };

//   console.log("Request Options:", requestOptions); // Log the complete request options to verify headers

//   return fetch(url, requestOptions);
// }
