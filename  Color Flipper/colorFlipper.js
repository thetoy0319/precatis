console.log("hiii");

const colors = [
  "rad", //0
  "green", //1
  "rgba(133,122,200)", //2
  "#f15025", // 3
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get rendum number of

  const randumNumder = 2;
  document.body.style.backgroundColor = colors[randumNumder];
  color.textContent = colors[randumNumder];
});
