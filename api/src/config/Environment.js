// El siguiente codigo carga las variables alojadas en archivo .env
const oDotEnv = require("dotenv");
oDotEnv.config();
// Asigna el archivo .env a una constante para su mejor manipulacion
// eslint-disable-next-line
const oEnviroment = process.env;
/**
 * Archivo de constantes de configuracion del proyecto
 */
module.exports = {
  URL_API: "/",
  URL_PUBLIC: oEnviroment.URL_PUBLIC,
  DEBUG: oEnviroment.DEBUG,
  PORT: oEnviroment.PORT || 5000,
  



  GENERAL_MESSAGE_ERROR: "Ah ocurrido un error, por favor intente de nuevo más tarde.",
  GENERAL_MESSAGE_NOT_FOUND: "No se encontro registro con ese identificador",
  GENERAL_MESSAGE_NOT_VALID: "Parámetros no válidos",
  GENERAL_MESSAGE_DONE: "Tarea realizada con éxito",
  GENERAL_MESSAGE_UNAUTHORIZED: "Su sesión ha expirado",
};