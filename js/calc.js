const btns = document.querySelectorAll("[data-btn]");
let calculo = document.querySelector(".calculo p");
let resultado = document.querySelector(".calculo h1");

btns.forEach((e) => {
  e.addEventListener("click", () => (calculo.innerHTML += e.value));
});

function apagaTudo() {
  calculo.innerHTML = "";
  resultado.innerHTML = "";
}

function apaga() {
  let apaga = calculo.innerHTML;
  calculo.innerHTML = apaga.slice(0, -1);
  if (
    calculo.innerHTML.endsWith(" -") ||
    calculo.innerHTML.endsWith(" +") ||
    calculo.innerHTML.endsWith(" /") ||
    calculo.innerHTML.endsWith(" *")
  ) {
    calculo.innerHTML = apaga.slice(0, -3);
  }
}

function resultadoFinal() {
  let resultadoConta = calculo.innerHTML;
  if (resultadoConta) {
    resultado.innerHTML = eval(resultadoConta);
  } else {
    resultado.innerHTML = "Nada...";
  }

  calculo.innerHTML += " =";
}

function porcentagem() {
  let teste = 0;
  teste = calculo.innerHTML;
  if (calculo.innerHTML.length === 2) {
    teste = `0.${teste} * `;
  } else if (calculo.innerHTML.length === 3) {
    teste = `${String(teste).slice(0, -2)} * `;
  } else {
    teste = `0.0${teste} * `;
  }
  calculo.innerHTML = teste;
}

function teclado() {
  document.documentElement.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      resultadoFinal();
    }
    if (e.keyCode === 8) {
      e.preventDefault();
      apaga();
    }
    if (e.keyCode === 46) {
      apagaTudo();
    }

    // Numeros teclado + Numeros NumPad
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105)
    ) {
      calculo.innerHTML += e.key;
    }

    // Operadores teclado Numpad
    if (e.keyCode === 110 || e.keyCode === 190) {
      calculo.innerHTML += ".";
    }
    if (e.keyCode === 111 || e.keyCode === 193) {
      calculo.innerHTML += " / ";
    }
    if (e.keyCode === 107) {
      calculo.innerHTML += " + ";
    }
    if (e.keyCode === 109 || e.keyCode === 189) {
      calculo.innerHTML += " - ";
    }
    if (e.keyCode === 106) {
      calculo.innerHTML += " * ";
    }
  });
}
teclado();
