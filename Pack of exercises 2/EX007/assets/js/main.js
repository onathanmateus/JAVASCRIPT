const form = document.querySelector("#form");

addEventListener("submit", function (e) {
  e.preventDefault();
  const peso = e.target.querySelector("#peso");
  console.log(peso);
});

function createP() {
  const p = document.createElement("p");
  return p;
}

function setResult(msg) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  const p = createP();
}
