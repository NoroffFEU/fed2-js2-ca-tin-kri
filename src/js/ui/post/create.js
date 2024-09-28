export async function onCreatePost(event) {}

//---- SHOULD I CREATE READ.js for this code, dont want to
//-- much with structure of project so I will for now put it here

// import { readPosts } from "../../api/post/read.js"; // Adjust the path as necessary

// // Function to display posts in the UI
// async function displayPosts() {
//   try {
//     const posts = await readPosts();
//     console.log("Fetched posts:", posts);
//     const postsContainer = document.getElementById("posts-container"); // Make sure you have an element with this ID
//     postsContainer.innerHTML = ""; // Clear previous posts

//     posts.forEach((post) => {
//       const postElement = document.createElement("div");
//       postElement.className = "post";
//       postElement.innerHTML = `
//         <h2>${post.title}</h2>
//         <p>${post.content}</p>
//       `;
//       postsContainer.appendChild(postElement);
//     });
//   } catch (error) {
//     console.error("Error displaying posts:", error);
//   }
// }

// // Call displayPosts when the page loads or on a specific event
// document.addEventListener("DOMContentLoaded", displayPosts);
