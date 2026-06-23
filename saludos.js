/**
 * saludos.js
 * ----------------------------------------------------------------------------
 * Módulo encargado de la lógica de saludo.
 * Se exporta usando ES Modules (export) para poder importarlo en index.js.
 * ----------------------------------------------------------------------------
 */

/**
 * Genera un mensaje de bienvenida personalizado.
 *
 * @param {string} nombre - Nombre de la persona a saludar.
 * @returns {string} Mensaje de bienvenida personalizado.
 */
export function saludoPersonalizado(nombre) {
  // Validación básica: si no se recibe un nombre válido, usamos uno genérico.
  const nombreLimpio =
    typeof nombre === "string" && nombre.trim().length > 0
      ? nombre.trim()
      : "invitado/a";

  return `¡Hola, ${nombreLimpio}! Bienvenido/a, es un placer tenerte aquí.`;
}
