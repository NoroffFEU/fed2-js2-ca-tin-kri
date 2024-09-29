import { API_KEY } from "./constants"; // Ensure API_KEY is imported
import { load } from "../storage/storage"; // Load token from localStorage

export function headers(hasBody = false) {
  const headers = new Headers();

  const accessToken = load("accessToken");

  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  } else {
    console.log("No API Key found in constants.");
  }

  if (hasBody) {
    headers.append("Content-Type", "application/json");
  }

  return headers;
}
