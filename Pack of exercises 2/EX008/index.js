const person = {
  name: "John",
  surname: "Doe",
  age: 23,
  adress: {
    street: "Rua das dores",
    number: 634,
  },
};

const { name, surname, ...rest } = person;

console.log(name, surname, rest);
