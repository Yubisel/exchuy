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
      let aChangesValues = [];

      aChangesValues.push(await this.oCotizationDolar.getExchange());
      aChangesValues.push(await this.oBROU.getExchange());

      this.respond(oResponse, DONE, aChangesValues);
    } catch (oException) {
      return this.respond(oResponse, CONFLICT, null, oException.message);
    }
  }
}

module.exports = ExchangeController;