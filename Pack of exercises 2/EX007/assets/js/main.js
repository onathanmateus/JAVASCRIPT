const form = document.querySelector("#form");

addEventListener("submit", function (e) {
  e.preventDefault();
});

function setResult(msg) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
}
