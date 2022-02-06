const express = require("express");
const ExchangeController = require("@controllers/ExchangeController");
const oRouter = express.Router();
/**
 * Constante que representa el controlador principal de estas rutas.
 */
const Controller = new ExchangeController();

oRouter.get("/", (oRequest, oResponse) => {
  Controller.getExchanges(oRequest, oResponse);
});

module.exports = oRouter;