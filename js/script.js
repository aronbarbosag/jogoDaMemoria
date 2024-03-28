const posicoes = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
];

function embaralha(lista) {
  for (let i = lista.length; i; i--) {
    const indiceAleatorio = Math.floor(Math.random() * i);

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
    div.querySelector('.card-back img').src = `./imagens/imagem${index}.jpg`;
  });
}

function handleClick(event) {
  event.preventDefault();
  const target = event.currentTarget.querySelector('.card-inner');
  target.classList.add('ativo');
}

function hiddenImg(event) {
  event.preventDefault();
}

const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  card.addEventListener('click', handleClick);
});

const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
  img.addEventListener('mousedown', hiddenImg);
});
