import { API_KEY } from "./constants";

export function headers() {
  const headers = new Headers();

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  return headers;
}
// So maybe i should move my authFetch.js to this file
//because authFetch.js is to return te correct header?
