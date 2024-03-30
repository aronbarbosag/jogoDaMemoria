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
let clique = 0;
let matchProximo;
let targetAnterior;
function handleClick(event) {
  clique++;
  event.preventDefault();
  const target = event.currentTarget.querySelector('.card-inner');
  target.classList.add('ativo');
  console.log(this.querySelector('.card-back img').getAttribute('src'));
  const atributoSrc = this.querySelector('.card-back img').getAttribute('src');
  const numeroImagem = +atributoSrc.match(/\d+/)[0];
  if (clique % 2 !== 0) {
    targetAnterior = target;
    if (numeroImagem % 2 === 0) {
      matchProximo = numeroImagem + 1;
    } else {
      matchProximo = numeroImagem - 1;
    }
  } else {
    if (numeroImagem === matchProximo) {
      console.log('deu match');
      target.classList.add('match');
    } else {
      target.classList.add('ativo');

      setTimeout(() => {
        targetAnterior.classList.remove('ativo');
        target.classList.remove('ativo');
      }, 900);

      matchProximo = undefined;
    }
  }

  console.log(numeroImagem);
  console.log('proximo:', matchProximo);
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
