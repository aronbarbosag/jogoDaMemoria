const posicoes = [0, 1, 2, 3];

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
