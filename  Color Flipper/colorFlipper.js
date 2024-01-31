console.log("hiii");

const colors = [
  "rad", //0
  "green", //1
  "rgba(133,122,200)", //2
  "#f15025", // 3
  "rgb(255, 0, 0)",
  "rgb(255, 153, 204)",
  "rgb(204, 153, 255)",
  "rgb(255, 102, 102)",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get rendum number of

  const randumNumder = getNumber();

  document.body.style.backgroundColor = colors[randumNumder];
  color.textContent = colors[randumNumder];
});

function getNumberForColoer() {
  return Math.floor(Math.random() * colors.length);
}
