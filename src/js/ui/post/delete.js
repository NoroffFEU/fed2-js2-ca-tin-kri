import { removePost } from "../../api/post/delete";

const redirecting = () => {
  const currentPath = window.location.pathname;

  if (currentPath.includes("/post/")) {
    window.location.href = "/";
  } else if (currentPath.includes("/profile/")) {
    window.location.reload();
  } else {
    window.location.reload();
  }
};

export async function onDeletePost(event) {
  event.preventDefault();

  const deleteButton = event.target;
  const postId = deleteButton.getAttribute("id");

  try {
    await removePost(postId); // Await the removal to ensure the post is deleted
    alert("The post was deleted successfully");
    redirecting(); // Redirect after successful deletion
  } catch (error) {
    console.error("Failed to delete the post:", error);
    alert("There was an error deleting the post. Please try again.");
  }
}
