
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8.9, "a", "b", "c", "d", "e", "f"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";

  for (i = 0; i < 6; i++) {
    hexColor += hex[genretNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function genretNumber() {
  return Math.floor(Math.random() * hex.length);
}
