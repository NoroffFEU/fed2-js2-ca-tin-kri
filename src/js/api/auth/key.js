// export async function getKey(name) {}

// src/js/auth/key.js

// Store the API key and JWT token
const apiKey = "e7462a9b-dcd7-48d3-92ff-45a6b8bcc4d8";
const authToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGlua3JpNTQxNzMiLCJlbWFpbCI6InRpbmtyaTU0MTczQHN0dWQubm9yb2ZmLm5vIiwiaWF0IjoxNzI3MzM5MzE2fQ.OeqgmcK-l5C1PCUexWTVsXMecQtgoz2IQo0odXaT2yo";

// Export function to get the API options here
export function getApiOptions() {
  return {
    headers: {
      Authorization: authToken,
      "X-Noroff-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  };
}
