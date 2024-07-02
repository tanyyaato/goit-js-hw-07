"use strict";
const form = document.querySelector(".login-form");
console.log(form);
form.addEventListener("submit", sendForm);
function sendForm(event) {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  if (email !== "" && password !== "") {
    const formIsFilled = {
      email,
      password,
    };
    form.reset();
    return console.log(formIsFilled);
  } else {
    form.reset();
    return alert(`All form fields must be filled in`);
  }
}
