const createPerson = (nome, sobrenome, altura, peso) => {
  return {
    nome,
    sobrenome,
    altura,
    peso,
    talk(assunto) {
      return `${this.nome} está ${assunto}`;
    },
    imc() {
      const indice = this.pesp / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
};

const person1 = createPerson("Nathan", "Mateus", 1.8, 64);
console.log(person1.imc());
