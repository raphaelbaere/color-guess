const pRgbColor = document.querySelector('#rgb-color');
const guessColor = document.querySelectorAll('.ball');
const answer = document.querySelector('#answer');
const reset = document.querySelector('#reset-game');
const placar = document.querySelector('#score');

function gerarCor() {
  const r = parseInt(Math.random() * 255, 10);

  const g = parseInt(Math.random() * 255, 10);

  const b = parseInt(Math.random() * 255, 10);

  return `rgb(${r}, ${g}, ${b})`;
}

for (let index = 0; index < guessColor.length; index += 1) {
  guessColor[index].style.backgroundColor = gerarCor();
}

pRgbColor.innerHTML = guessColor[Math.floor(Math.random() * guessColor.length)].style.backgroundColor;

for (let index = 0; index < guessColor.length; index += 1) {
  guessColor[index].addEventListener('click', (event) => {
    if (event.target.style.backgroundColor === pRgbColor.innerHTML) {
      answer.innerHTML = 'Acertou!';
      const somaPlacar = Number(placar.innerHTML) + 3;
      placar.innerHTML = somaPlacar.toString(10);
    } else if (event.target.style.backgroundColor === guessColor[index].style.backgroundColor) {
      answer.innerHTML = 'Errou! Tente novamente!';
    }
  });
}

reset.addEventListener('click', () => {
  for (let index = 0; index < guessColor.length; index += 1) {
    guessColor[index].style.backgroundColor = gerarCor();
  }
  pRgbColor.innerHTML = guessColor[Math.floor(Math.random() * guessColor.length)].style.backgroundColor;
  answer.innerHTML = 'Escolha uma cor';
});
