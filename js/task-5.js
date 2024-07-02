"use strict";
const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const colorNumber = document.querySelector(".color");
button.addEventListener("click", changeColor);
function changeColor(event) {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorNumber.textContent = newColor;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
