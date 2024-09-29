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
