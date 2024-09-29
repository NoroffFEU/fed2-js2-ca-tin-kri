import { readPost } from "../api/post/read";

function findPostID() {
  const urlParams = new URLSearchParams(window.location.search);
  const postID = urlParams.get("id");
  return postID;
}

export async function populateForm() {
  const id = findPostID();
  const post = await readPost(id);

  document.getElementById("title").value = post.title;
  document.getElementById("id").value = id;
  document.getElementById("mediaURL").value = post.media.url;
  document.getElementById("mediaALT").value = post.media.alt;
  document.getElementById("body").value = post.body;
  document.getElementById("tags").value = post.tags;
}
