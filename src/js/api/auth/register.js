import { API_AUTH_REGISTER } from "../constants";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = API_AUTH_REGISTER;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const result = await response.json();
  console.log(result);
}

// export async function register({
//   name,
//   email,
//   password,
//   bio,
//   banner,
//   avatar,
// }) {}
