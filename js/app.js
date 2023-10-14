const piedra = document.querySelector("#piedra");
const papel = document.querySelector("#papel");
const tijera = document.querySelector("#tijera");


let jugadaUsuario = "";
let jugadaPc = "";
let resultado = "";


function generarJugadaPc() {
  const opciones = ["piedra", "papel", "tijera"];
  const jugada = Math.floor(Math.random() * 3);
  return opciones[jugada];
}


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


function resultadoEnPantalla() {
  document.querySelector(
    "#resultado"
  ).innerHTML = ` <div class="resultado"><p>Elegiste <span>${jugadaUsuario}</span> y la computadora eligio <span>${jugadaPc}.</span></p> <p> El resutlado es: <span>${resultado}</span></p></div>`;
}
