const Controller = require("./Controller");
const { DONE, CONFLICT } = require("@config/StatusCode");
const CotizationDolar = require("@models/CotizationDolar");
const BROU = require("@models/BROU");


class ExchangeController extends Controller {
  constructor() {
    super();
    this.oCotizationDolar = new CotizationDolar();
    this.oBROU = new BROU();
  }

  getExchanges = async (oRequest, oResponse) => {
    try {
      this.respond(oResponse, DONE, [
        await this.oCotizationDolar.getExchange(),
        await this.oBROU.getExchange()]
      );
    } catch (oException) {
      return this.respond(oResponse, CONFLICT, null, oException.message);
    }
  }
}

module.exports = ExchangeController;