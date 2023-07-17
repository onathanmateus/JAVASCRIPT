const form = document.querySelector("#form");

addEventListener("submit", function (e) {
  e.preventDefault();
  const inputWeight = e.target.querySelector("#weight");
  const inputHeight = e.target.querySelector("#height");
  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  if (!weight) {
    setResult("Peso inválido", false);
    return;
  }
  if (!height) {
    setResult("Altura inválida", false);
    return;
  }

  const imc = getImc(weight, height);
  console.log(imc);
});

function getImc(weight, height) {
  const imc = weight / Math.pow(height, 2);
  return imc.toFixed(2);
}

function createP() {
  const p = document.createElement("p");
  return p;
}

function setResult(msg, isValid) {
  const result = document.querySelector("#result");
  result.innerHTML = "";

  const p = createP();
  p.innerHTML = msg;
  result.appendChild(p);
}
