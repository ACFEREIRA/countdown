function dataLancamento() {
  return new Date('Sep 10, 2024 00:00:00').getTime();
}

function diferencaTempo(lancamento) {
  const agora = new Date().getTime();
  return lancamento - agora;
}

function contagemRegressiva() {
  const lancamento = dataLancamento();
  const distancia = diferencaTempo(lancamento);

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = dias;
  document.getElementById('hours').innerText = horas;
  document.getElementById('minutes').innerText = minutos;
  document.getElementById('seconds').innerText = segundos;

  if (distancia < 0) {
    clearInterval(contagemRegressiva);
    document.querySelector('.contdown').innerHTML = "<h1>Já estamos no ar!</h1>";
  }
}

function iniciarContagem() {
  contagemRegressiva();
  setInterval(contagemRegressiva, 1000);
}

document.addEventListener('DOMContentLoaded', (event) => {
  iniciarContagem();
})