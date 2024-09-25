// export async function onRegister(event) {
//   const form = document.querySelector("#register");

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const formData = new FormData(form);
//     const profile = Object.fromEntries(formData.entries());
//     console.log(profile);
//   });
// }

// // Try removing the from = event.target since it is already defined outside the event listener

export async function onRegister(event) {
  event.preventDefault();

  const form = event.target; // Get the form element that triggered the event
  const formData = new FormData(form);
  const profile = Object.fromEntries(formData.entries());

  console.log(profile);

  // Will add fetch logic here?
}

const form = document.querySelector("#register");
if (form) {
  form.addEventListener("submit", onRegister);
}
