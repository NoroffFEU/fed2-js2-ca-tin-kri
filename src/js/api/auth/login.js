import { authFetch } from "../authFetch";
import { API_AUTH_LOGIN } from "../constants";
import * as storage from "../../storage/storage";
import router from "../../router/index.js";

export async function login(profile) {
  const response = await authFetch(API_AUTH_LOGIN, {
    method: "POST",
    body: JSON.stringify(profile),
  });

  if (response.ok) {
    const {
      data: { accessToken, ...user },
    } = await response.json();

    if (accessToken) {
      storage.save("token", accessToken);
      storage.save("profile", user);
      console.log("User profile stored successfully:", user);

      router("/post/edit/");
      console.log("Router ---> redirecting to /post/edit/");
    } else {
      console.error("Failed to get access to token");
    }
  } else {
    throw new Error("Login failed");
  }
}
