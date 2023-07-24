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
  const nivelImc = getLevelImc(imc);
  const msg = `O seu IMC é ${imc} (${nivelImc}).`;
  setResult(msg, true);

  console.log(nivelImc);
});

function getLevelImc(imc) {
  const level = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return level[5];
  if (imc >= 34.9) return level[4];
  if (imc >= 29.9) return level[3];
  if (imc >= 24.9) return level[2];
  if (imc >= 18.5) return level[1];
  if (imc <= 18.5) return level[0];
}

function setResult(msg, isValid) {
  const result = document.querySelector("#result");
  result.innerHTML = "";

  const p = createP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  result.appendChild(p);
}

function getImc(weight, height) {
  const imc = weight / Math.pow(height, 2);
  return imc.toFixed(2);
}

function createP() {
  const p = document.createElement("p");
  return p;
}
