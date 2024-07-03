"use strict";
const input = document.querySelector("#name-input");
const currentName = document.querySelector("#name-output");
input.addEventListener("input", handleUsername);
function handleUsername(event) {
  const inputValue = event.target.value.trim();
  if (inputValue === "") {
    currentName.textContent = "Anonymous";
  } else {
    currentName.textContent = inputValue;
  }
}
