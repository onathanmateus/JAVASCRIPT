const elements = [
  { tag: "p", text: "frase 1" },
  { tag: "div", text: "frase 2" },
  { tag: "section", text: "frase 3" },
  { tag: "footer", text: "frase 4" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elements.length; i++) {
  let { tag, text } = elements[i];
  let tagCreated = document.createElement(tag);
  let textCreated = document.createTextNode(text);

  tagCreated.appendChild(textCreated);
  div.appendChild(tagCreated);
}

container.appendChild(div);
