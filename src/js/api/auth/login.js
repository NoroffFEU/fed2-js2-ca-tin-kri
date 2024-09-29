import { authFetch } from "../authFetch";
import { API_AUTH_LOGIN } from "../constants";
import { save } from "../../storage/save.js";

export async function login(profile) {
  const response = await authFetch(API_AUTH_LOGIN, {
    method: "POST",
    body: JSON.stringify(profile),
  });

  if (response.ok) {
    const {
      data: { accessToken, ...user },
    } = await response.json();

    if (response.ok) {
      const { accessToken, ...profile } = (await response.json()).data;
      save("token", accessToken);
      save("profile", profile);
      return profile;
    } else {
      await handleErrors(response);
    }
  }
}
