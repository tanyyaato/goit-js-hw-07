"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector("input[type=number]");
const areaForNewElement = document.querySelector("#boxes");
const numberOfColor = getRandomHexColor();

buttonCreate.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
  resetInput();
  if (amount < 1 || amount > 100) {
    return;
  }

  let boxElement = "";
  let boxSize = 30;
  for (let i = 1; i <= input.value; i += 1) {
    const color = getRandomHexColor();
    boxElement += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color:${color};" ></div>`;
    boxSize += 10;
  }
  areaForNewElement.insertAdjacentHTML("beforeend", boxElement);
  input.value = "";
}

function resetInput() {
  areaForNewElement.innerHTML = "";
}
function destroyBoxes() {
  resetInput();
}
