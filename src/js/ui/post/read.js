import { readPost, readPosts } from "../../api/post/read";
import { load } from "../../storage/load";

export async function renderPost() {
  const postContainer = document.getElementById("post-container");

  const id = findPostID();
  const post = await readPost(id);
  const postElement = singlePostTemplate(post);

  postContainer.appendChild(postElement);
}

export async function renderPosts() {
  const postsContainer = document.getElementById("posts-container");

  const posts = await readPosts();
  const postElements = postsTemplate(posts);

  postElements.forEach((postElement) => {
    postsContainer.appendChild(postElement);
  });
}
