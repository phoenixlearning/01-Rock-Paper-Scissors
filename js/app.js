const piedra = document.querySelector("#piedra");
const papel = document.querySelector("#papel");
const tijera = document.querySelector("#tijera");

// Variables globales para el juego

let jugadaUsuario = "";
let jugadaPc = "";
let resultado = "";

// Funcion que genera la eleccion de la computadora

function generarJugadaPc() {
  const opciones = ["piedra", "papel", "tijera"];
  const jugada = Math.floor(Math.random() * 3);
  return opciones[jugada];
}

// Funcion para determinar el resultado

function determinarResultado() {
  if (jugadaUsuario === jugadaPc) {
    resultado = "Empate!";
  } else if (
    (jugadaUsuario === "piedra" && jugadaPc === "tijera") ||
    (jugadaUsuario === "papel" && jugadaPc === "piedra") ||
    (jugadaUsuario === "tijera" && jugadaPc === "papel")
  ) {
    resultado = "Ganaste!";
  } else {
    resultado = "Perdiste!";
  }
}

// Controladores de los botones

piedra.addEventListener("click", function () {
  jugadaUsuario = "piedra";

  jugadaPc = generarJugadaPc();

  determinarResultado();

  resultadoEnPantalla();
});

papel.addEventListener("click", function () {
  jugadaUsuario = "papel";

  jugadaPc = generarJugadaPc();

  determinarResultado();

  resultadoEnPantalla();
});

tijera.addEventListener("click", function () {
  jugadaUsuario = "tijera";

  jugadaPc = generarJugadaPc();

  determinarResultado();

  resultadoEnPantalla();
});

// Funcion que muestra el resultado en pantalla

function resultadoEnPantalla() {
  document.querySelector(
    "#resultado"
  ).innerHTML = `<h4 class='resultado'>Elegiste ${jugadaUsuario}, la computadora eligio ${jugadaPc}. El resutlado es: ${resultado}</h4>`;
}
