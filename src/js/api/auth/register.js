import { authFetch } from "../authFetch";
import { API_AUTH_REGISTER } from "../constants";
// import { headers } from "../headers";

export async function register(profile) {
  const response = await authFetch(API_AUTH_REGISTER, {
    method: "POST",
    body: JSON.stringify(profile),
  });

  if (response.ok) {
    alert("You are now registered!");
    return await response.json();
  }

  throw new Error("Could not register the account");
}

// export async function register({
//   name,
//   email,
//   password,
//   bio,
//   banner,
//   avatar,
// }) {}

// const method = "post";

// export async function register(profile) {
//   const registerURL = API_AUTH_REGISTER;
//   console.log(registerURL);
//   const body = JSON.stringify(profile);

//   const response = await fetch(registerURL, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method,
//     body,
//   });

//   const result = await response.json();
//   alert("You are now registered!");
//   return result;
// }
