import { createPost } from "../../api/post/create";

function MediaObject(stringURL, stringAlt) {
  const media = {
    url: stringURL,
    alt: stringAlt,
  };

  if (stringURL === "") {
    return null;
  } else {
    return media;
  }
}

function stringToArray(inputString) {
  return inputString
    .trim()
    .split(",")
    .map((item) => item.trim());
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
