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
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGlua3JpNTQxNzMiLCJlbWFpbCI6InRpbmtyaTU0MTczQHN0dWQubm9yb2ZmLm5vIiwiaWF0IjoxNzI3NTM3MzQ0fQ.C4Cms-1hJF9jYbaaSMiynbnxs88baPrh8RC5Q6I1gX0",
    "X-Noroff-API-Key": "968835ed-e637-4dcb-b72c-7801af91ce1d",
  },
};
