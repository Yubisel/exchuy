const oEnvironment = require("@config/Environment");
const { NOT_FOUND, NOT_VALID, PERMISSIONS, DONE } = require("@config/StatusCode");

class Controller {

  constructor() {
  }

  /**
   * Función que retorna la respuesta.
   * 
   * @param {Response} oResponse Este objeto maneja el response de la solicitud.
   * @param {number} nStatusCode Codigo de estado de la solicud.
   * @param {Array} oData Arreglo de datos que seran devueltos en la solicitud.
   * @param {string | object} oException Mensaje de error o objeto error si lo hay.
   * 
   * @author Ing. Yubisel Vega Alvarez
   */
  respond = (oResponse, nStatusCode, oData = null, oException = null) => {
    oResponse.status(nStatusCode);
    if (oData == null)
      switch (nStatusCode) {
        case NOT_FOUND:
          oData = { message: oEnvironment.GENERAL_MESSAGE_NOT_FOUND };
          break;
        case NOT_VALID:
          oData = { message: oEnvironment.GENERAL_MESSAGE_NOT_VALID };
          break;
        case PERMISSIONS:
          oData = { message: oEnvironment.GENERAL_MESSAGE_UNAUTHORIZED };
          break;
        case DONE:
          oData = { message: oEnvironment.GENERAL_MESSAGE_DONE };
          break;
        default:
          oData = { message: oEnvironment.GENERAL_MESSAGE_ERROR };
          break;
      }
    if (oEnvironment.DEBUG && oException !== null)
      oData["debug"] = oException;
    oResponse.json(oData);
  };

}

module.exports = Controller;