const posicoes = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

function embaralha(lista) {
  for (let i = lista.length; i; i--) {
    const indiceAleatorio = Math.floor(Math.random() * i);

    // guarda de um índice aleatório da lista
    const elemento = lista[i - 1];

    lista[i - 1] = lista[indiceAleatorio];

    lista[indiceAleatorio] = elemento;
  }
  trocarImagem();
}

embaralha(posicoes);

function trocarImagem() {
  posicoes.forEach((posicao, index) => {
    const div = document.getElementById(`${posicao}`);
    div.querySelector("img").src = `./imagens/imagem${index}.jpg`;
  });
}
console.log(posicoes);

//evento de clicar na imagem e adicionar a classe ativo na imagem;
const container = document.querySelector(".container");

function handleClick(event) {
  event.preventDefault();

  if (event.target.classList.value !== "container") {
    event.target.classList.add("ativo");
  }
}

container.addEventListener("click", handleClick);
