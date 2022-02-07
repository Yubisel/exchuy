const Controller = require("./Controller");
const { DONE, CONFLICT } = require("@config/StatusCode");
const CotizationDolar = require("@models/CotizationDolar");
const BROU = require("@models/BROU");


class ExchangeController extends Controller {
  constructor() {
    super();
  }

  getExchanges = async (oRequest, oResponse) => {
    try {
    const oCotizationDolar = new CotizationDolar();
    const oBROU = new BROU();
      this.respond(oResponse, DONE, [
        await oCotizationDolar.getExchange(),
        await oBROU.getExchange()]
      );
    } catch (oException) {
      return this.respond(oResponse, CONFLICT, null, oException.message);
    }
  }
}

module.exports = ExchangeController;