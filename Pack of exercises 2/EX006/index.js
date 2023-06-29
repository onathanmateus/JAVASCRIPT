function meuEscopo() {
  const form = document.querySelector("form");
  const pessoas = [];

  function receiveEvent(event) {
    event.preventDefault();
    const nome = form.querySelector(".nome").value;
    const sobrenome = form.querySelector(".sobrenome").value;
    const peso = form.querySelector(".peso").value;
    const altura = form.querySelector(".altura").value;

    pessoas.push({
      nome: nome,
      sobrenome: sobrenome,
      peso: peso,
      altura: altura,
    });

    console.log(pessoas);
  }
  form.addEventListener("submit", receiveEvent);
}
meuEscopo();
