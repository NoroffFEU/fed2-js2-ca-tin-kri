export async function readPost(id) {}

export async function readPosts(limit = 12, page = 1, tag) {
  const baseUrl = "API_SOCIAL_POSTS"; // Replace with actual API endpoint
  const url = new URL(baseUrl);

  // Set search parameters
  url.searchParams.append("limit", limit);
  url.searchParams.append("page", page);
  if (tag) {
    url.searchParams.append("tag", tag);
  }

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include JWT if required
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data; // This should be an array of posts
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return null;
  }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
