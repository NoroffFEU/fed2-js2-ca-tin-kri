import { authFetch } from "../authFetch";
import { API_AUTH_LOGIN } from "../constants";
import * as storage from "../../storage/storage";

export async function login(profile) {
  const response = await authFetch(API_AUTH_LOGIN, {
    method: "POST",
    body: JSON.stringify(profile), // Send the profile data directly
  });

  if (response.ok) {
    const {
      data: { accessToken, ...user },
    } = await response.json();

    console.log("Token stored successfully:", accessToken);

    // Save the accessToken and user profile if available
    if (accessToken) {
      storage.save("token", accessToken);
      storage.save("profile", user);
      console.log("User profile stored successfully:", user);
    } else {
      console.error("Failed to get access to token");
    }
    alert("You are now logged in!");
  } else {
    throw new Error("Login failed");
  }
}
