import { createPost } from "../../api/post/create";

function MediaObject(url, alt) {
  if (!url) return null;
  return { url, alt };
}

function stringToArray(input) {
  return input
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export async function onCreatePost(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());

  const tagsAsArray = stringToArray(formValues.tags);
  const mediaAsObject = MediaObject(formValues.mediaURL, formValues.mediaALT);

  const postData = {
    title: formValues.title,
    media: mediaAsObject,
    body: formValues.body,
    tags: tagsAsArray,
  };

  await createPost(postData);
}
