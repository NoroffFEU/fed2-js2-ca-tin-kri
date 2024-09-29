// this is the same as src/js/handlers/register.js in video 44:00-----------------
import { register } from "../../api/auth/register";
export async function onRegister(event) {
  //called in video 39:50 :setRegisterFromListener//
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const profile = Object.fromEntries(formData.entries());

  console.log("it worked");
  // send it to the api
  register(profile);
}

// send it to the api but in another file because of function responsibility
//listing to the form  and api communication need to be separate so we can test each one of them
//the api communication is in src/js/api/auth/register.js
