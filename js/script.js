'use strict';

const posicoes = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
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
let tempoInicio;
let contador = 0;
let clique = 0;
let matchProximo;
let targetAnterior;
function handleClick(event) {
  clique++;
  event.preventDefault();
  const target = event.currentTarget.querySelector('.card-inner');
  target.classList.add('ativo');

  const atributoSrc = this.querySelector('.card-back img').getAttribute('src');
  const numeroImagem = +atributoSrc.match(/\d+/)[0];

  if (!target.classList.contains('match')) {
    if (clique % 2 !== 0) {
      targetAnterior = target;
      if (numeroImagem % 2 === 0) {
        matchProximo = numeroImagem + 1;
      } else {
        matchProximo = numeroImagem - 1;
      }
    } else {
      if (numeroImagem === matchProximo) {
        contador++;
        target.classList.add('match');
        targetAnterior.classList.add('match');
        desativarCliqueNoMatch(target);
        desativarCliqueNoMatch(targetAnterior);
      } else {
        target.classList.add('ativo');

        setTimeout(() => {
          targetAnterior.classList.remove('ativo');
          target.classList.remove('ativo');
        }, 900);
        desativarClique();
        setTimeout(() => {
          ativarClique();
        }, 1000);

        matchProximo = undefined;
      }
    }
  }

  if (contador === 12) {
    layoutFimJogo.classList.remove('hidden');
    overflow.classList.remove('hidden');
  }
}

function hiddenImg(event) {
  event.preventDefault();
}

const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  card.addEventListener('click', handleClick);
  card.addEventListener('touch', handleClick);
});

const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
  img.addEventListener('mousedown', hiddenImg);
});

const nivel = document.getElementById('niveis');

function desativarClique() {
  cards.forEach((card) => {
    card.removeEventListener('click', handleClick);
    card.removeEventListener('touch', handleClick);
  });
}

function desativarCliqueNoMatch(target) {
  target.removeEventListener('click', handleClick);
  target.removeEventListener('touch', handleClick);
}

function ativarClique() {
  cards.forEach((card) => {
    card.addEventListener('click', handleClick);
    card.addEventListener('touch', handleClick);
  });
}

const btnRecomecar = document.getElementById('recomecar');
const layoutFimJogo = document.querySelector('.fimJogo');
const overflow = document.querySelector('.overflow');
btnRecomecar.addEventListener('click', recomecarJogo);
function recomecarJogo(e) {
  e.preventDefault();
  window.location.reload(true);
}
