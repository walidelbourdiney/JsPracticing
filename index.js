"use strict";
const heading = document.querySelector("h1");
heading.addEventListener("mouseenter", (e) => {
  const element = e.target;
  element.classList.add("loading");
  setTimeout(() => {
    element.classList.remove("loading");
  }, 3000);
});

const x = Number(prompt("what is your age?"));
let y = 2025 - x;
alert(`you were born in ${y}`);
