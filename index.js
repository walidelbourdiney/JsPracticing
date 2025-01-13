"use strict";
const heading = document.querySelector("h1");
heading.addEventListener("mouseenter", (e) => {
  const element = e.target;
  element.classList.add("loading");
  setTimeout(() => {
    element.classList.remove("loading");
  }, 3000);
});

// const x = Number(prompt("what is your age?"));
// let y = 2025 - x;
// alert(`you were born in ${y}`);

// const people = ["Mario", "Luigi", "Ryu", "Shaun", "Chun-Li"];
// people.forEach((person, index) => {
//   console.log(`${index + 1}: Hello, ${person}`);
// });

const people = ["Mario", "Luigi", "Ryu", "Shaun", "Chun-Li"];
let html = "";
people.forEach((person) => {
  html += `<li style="color: purple">${person}</li>`;
});
document.querySelector("ul").innerHTML = html;
