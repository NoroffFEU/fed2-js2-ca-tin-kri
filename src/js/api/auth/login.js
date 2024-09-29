// import { authFetch } from "../authFetch";
// import { API_AUTH_LOGIN } from "../constants";
// import { save } from "../../storage/save.js";

// export async function login(profile) {
//   const response = await authFetch(API_AUTH_LOGIN, {
//     method: "POST",
//     body: JSON.stringify(profile),
//   });

//   if (response.ok) {
//     const {
//       data: { accessToken, ...user },
//     } = await response.json();

//     if (response.ok) {
//       const { accessToken, ...profile } = (await response.json()).data;
//       save("token", accessToken);
//       save("profile", profile);
//       return profile;
//     } else {
//       await handleErrors(response);
//     }
//   }
// }

import { authFetch } from "../authFetch";
import { API_AUTH_LOGIN } from "../constants";
import { save } from "../../storage/save.js";

export async function login(profile) {
  const response = await authFetch(API_AUTH_LOGIN, {
    method: "POST",
    body: JSON.stringify(profile),
  });

  if (response.ok) {
    const responseData = await response.json(); // Store the JSON response once
    const { accessToken, ...user } = responseData.data;

    // Save token and user profile
    save("token", accessToken);
    save("profile", user);

    return user; // Return the user profile data
  } else {
    throw new Error("Login failed. Please check your credentials."); // Throw an error for non-ok responses
  }
}
