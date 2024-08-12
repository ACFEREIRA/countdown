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
  document.getElementById('hours').innerText = horas.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutos.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = segundos.toString().padStart(2, '0');

  if (distancia < 0) {
    clearInterval(intervalId);
    document.querySelector('.countdown').innerHTML = "<h1>Já estamos no ar!</h1>";
  }
}

let intervalId;

function iniciarContagem() {
  contagemRegressiva();
  intervalId = setInterval(contagemRegressiva, 1000);
}

document.addEventListener('DOMContentLoaded', (event) => {
  iniciarContagem();
})

// Modal //

function toggleModal() {
  const modal = document.getElementById('subscribe_modal');
  if (modal.style.display === 'flex') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'flex';
  }
}

document.getElementById('subscribe_form').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  alert('Obrigado sr(a) ' + name + ', os seus dados foram encaminhados com sucesso!');
  toggleModal();
});
