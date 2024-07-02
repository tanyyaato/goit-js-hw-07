"use strict";
const categoriesLength = document.querySelectorAll("h2");
console.log(`Number of categories: ${categoriesLength.length}`);
const items = document.querySelectorAll(".item");
items.forEach((item) => {
  const nameOfCategory = item.querySelector("h2").textContent;
  const lengthOfCategory = item.querySelectorAll("ul li").length;
  console.log(`Category : ${nameOfCategory} `);
  console.log(`Elements: ${lengthOfCategory}`);
});
