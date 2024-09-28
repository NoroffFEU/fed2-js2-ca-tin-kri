import { API_AUTH_REGISTER } from "../constants";
//redundant since API_AUTH_REGISTER already gives the path
// const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = API_AUTH_REGISTER;
  console.log(registerURL);
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  alert("You are now registered!");
  return result;
}

// export async function register({
//   name,
//   email,
//   password,
//   bio,
//   banner,
//   avatar,
// }) {}
