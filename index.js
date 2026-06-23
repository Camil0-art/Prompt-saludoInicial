/**
 * index.js
 * ----------------------------------------------------------------------------
 * Punto de entrada de la aplicación.
 * - Importa la función "saludoPersonalizado" desde el módulo "saludos.js".
 * - Solicita el nombre del usuario de forma interactiva por consola usando
 *   el módulo nativo de Node.js "node:readline/promises" (API moderna, sin
 *   necesidad de librerías externas) y async/await.
 * - Muestra el resultado final en la terminal.
 * ----------------------------------------------------------------------------
 */

import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { saludoPersonalizado } from "./saludos.js";

/**
 * Función principal asíncrona que orquesta la interacción con el usuario.
 */
async function main() {
  // Creamos la interfaz de lectura usando la entrada/salida estándar del proceso.
  const rl = createInterface({ input, output });

  try {
    // Solicitamos el nombre al usuario de forma interactiva.
    const nombreIngresado = await rl.question(
      "Por favor, escribe tu nombre: "
    );

    // Procesamos el nombre con la función modularizada.
    const mensaje = saludoPersonalizado(nombreIngresado);

    // Mostramos el resultado final en la terminal.
    console.log(mensaje);
  } finally {
    // Cerramos siempre la interfaz de readline, incluso si ocurre un error.
    rl.close();
  }
}

// Ejecutamos la función principal.
main();
