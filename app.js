// Función que genera un número aleatorio entre un rango de enteros
function generarNumeroAleatorio(minimo, maximo) {
  let numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  return numero;
}

// Array de objetos con las opciones del juego
const opciones = [
  { id: 0, nombre: "Fuego", debilidades: [1] },
  { id: 1, nombre: "Agua", debilidades: [2] },
  { id: 2, nombre: "Planta", debilidades: [0] },
];

// Función que devuelve la opción del juego correspondiente a un ID
function obtenerOpcionPorId(id) {
  return opciones.find((opcion) => opcion.id === id);
}

// Función que determina el ganador de la partida
function determinarGanador(opcionUsuario, opcionMaquina) {
  if (opcionUsuario.id === opcionMaquina.id) {
    return "Empate";
  } else if (opcionUsuario.debilidades.includes(opcionMaquina.id)) {
    return "Ganó la máquina";
  } else {
    return "Ganaste tú";
  }
}

// Array para almacenar los resultados de las partidas
const resultados = [];

// Función que permite al usuario jugar una partida
function jugar() {
  let opcionUsuario;
  let opcionMaquina = generarNumeroAleatorio(0, 2);

  opcionUsuario = parseInt(
    prompt("¿Qué eliges?\nFuego: 0\nAgua: 1\nPlanta: 2", 0)
  );

  const opcionElegidaUsuario = obtenerOpcionPorId(opcionUsuario);
  const opcionElegidaMaquina = obtenerOpcionPorId(opcionMaquina);

  alert(`Elegiste ${opcionElegidaUsuario.nombre}`);
  alert(`Javascript eligió ${opcionElegidaMaquina.nombre}`);

  const resultado = determinarGanador(opcionElegidaUsuario, opcionElegidaMaquina);
  alert(resultado);

  resultados.push({
    usuario: opcionElegidaUsuario,
    maquina: opcionElegidaMaquina,
    resultado: resultado,
  });
}

let seguirJugando = true;

// Ciclo while para permitir al usuario jugar tantas veces como quiera
while (seguirJugando) {
  jugar();

  const seguir = prompt("¿Quieres seguir jugando? (si/no)").toLowerCase();

  if (seguir === "no") {
    seguirJugando = false;
  }
}

// Ciclo for para mostrar los resultados del juego en la página web
for (let i = 0; i < resultados.length; i++) {
  const resultado = resultados[i];

  const usuario = resultado.usuario.nombre;
  const maquina = resultado.maquina.nombre;
  const resultadoFinal = resultado.resultado;

  document.write(
    `<p>Usuario: ${usuario} - Máquina: ${maquina} - Resultado: ${resultadoFinal}</p>`
  );
}
