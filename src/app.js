/* eslint-disable */
import "bootstrap";
import "./style.css";

const numeroCarta = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
// let spades = `<img class="img-fluid" src="src/img/spades.png" />`;
// let treboles = `<img class="img-fluid" src="src/img/tréboles.png" />`;
// let diamonds = `<img class="img-fluid" src="src/img/diamonds.png" />`;
// let hearts = `<img class="img-fluid" src="src/img/hearts.png" />`;let diamonds = `♦`;
let diamonds = `♦`;
let hearts = `♥`;
let spades = `♠`;
let treboles = `♣`;
const palos = [spades, treboles, diamonds, hearts];

window.onload = function() {
  //write your code here
  function generarNumero(numeroCarta) {
    let elegirNumero = Math.floor(Math.random() * numeroCarta.length);
    let numero = `${numeroCarta[elegirNumero]}`;
    return numero;
  }
  let numeroAleatorio = generarNumero(numeroCarta);
  document.getElementById("numero").innerHTML = numeroAleatorio;

  function generarPalos(palos) {
    let elegirPalo = Math.floor(Math.random() * palos.length);
    let palo = `${palos[elegirPalo]}`;
    return palo;
  }
  let paloAleatorio = generarPalos(palos);
  document.querySelector("#divPalo1").innerHTML = paloAleatorio;
  document.querySelector("#divPalo2").innerHTML = paloAleatorio;

  if (paloAleatorio === diamonds || paloAleatorio === hearts) {
    numero.style.color = "red";
    divPalo1.style.color = "red";
    divPalo2.style.color = "red";
  }

  if (paloAleatorio === spades || paloAleatorio === treboles) {
    numero.style.color = "black";
    divPalo1.style.color = "black";
    divPalo2.style.color = "black";
  }
};

// Crear función para que el botón genere otra carta
const nuevaCarta = () => {
  function generarNumero(numeroCarta) {
    let elegirNumero = Math.floor(Math.random() * numeroCarta.length);
    let numero = `${numeroCarta[elegirNumero]}`;
    return numero;
  }
  let numeroAleatorio = generarNumero(numeroCarta);
  document.getElementById("numero").innerHTML = numeroAleatorio;
  function generarPalos(palos) {
    let elegirPalo = Math.floor(Math.random() * palos.length);
    let palo = `${palos[elegirPalo]}`;
    return palo;
  }
  let paloAleatorio = generarPalos(palos);
  document.querySelector("#divPalo1").innerHTML = paloAleatorio;
  document.querySelector("#divPalo2").innerHTML = paloAleatorio;

  if (paloAleatorio === diamonds || paloAleatorio === hearts) {
    numero.style.color = "red";
    divPalo1.style.color = "red";
    divPalo2.style.color = "red";
  }

  if (paloAleatorio === spades || paloAleatorio === treboles) {
    numero.style.color = "black";
    divPalo1.style.color = "black";
    divPalo2.style.color = "black";
  }
};
document.getElementById("button").addEventListener("click", e => {
  nuevaCarta();
});

//Agregar un temporizador que genere una nueva carta automáticamente cada 10 segundos

const cuentaRegresivaElement = document.querySelector(".contador");
const botonPlay = document.querySelector(".fa-play");
const botonPause = document.querySelector(".fa-pause");

let cuentaRegresiva = 10;
let intervalo;

function actualizarCuentaRegresiva() {
  cuentaRegresivaElement.textContent = cuentaRegresiva;
}

function iniciarCuentaRegresiva() {
  intervalo = setInterval(function() {
    cuentaRegresiva--;
    actualizarCuentaRegresiva();
    if (cuentaRegresiva === 0) {
      clearInterval(intervalo);
      setTimeout(function() {
        nuevaCarta();
        cuentaRegresiva = 10;
        actualizarCuentaRegresiva();
      }, 1000);
    }
  }, 1000);
}

function pausarCuentaRegresiva() {
  clearInterval(intervalo);
}

botonPlay.addEventListener("click", function() {
  iniciarCuentaRegresiva();
});

botonPause.addEventListener("click", function() {
  pausarCuentaRegresiva();
  cuentaRegresiva = parseInt(cuentaRegresivaElement.textContent);
});

actualizarCuentaRegresiva();

// Permitir al usuario especificar el width y height de la carta utilizando text-inputs
const carta = document.querySelector(".card");

document.getElementById("buttonWH").addEventListener("click", function() {
  const widthInput = document.getElementById("widthInput").value;
  const heightInput = document.getElementById("heightInput").value;

  if (widthInput && heightInput) {
    const width = parseInt(widthInput);
    const height = parseInt(heightInput);
    if (!isNaN(width) && !isNaN(height)) {
      carta.style.width = width + "px";
      carta.style.height = height + "px";
    } else {
      alert("Por favor, ingrese valores válidos para ancho y alto.");
    }
  } else {
    alert("Por favor, ingrese valores para ancho y alto.");
  }
});
