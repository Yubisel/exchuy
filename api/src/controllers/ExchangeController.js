const Controller = require("./Controller");
const { DONE, CONFLICT, NOT_VALID, NOT_FOUND } = require("@config/StatusCode");


class ExchangeController extends Controller {
  constructor() {
    super();
  }

  getExchanges = async(oRequest, oResponse) => {
    try {
      // const nId = oRequest.params.nId;
      // if (!nId)
      //   return this.respond(oResponse, NOT_VALID);
      // Model.find(nId, (oEmployee, bIsError = false) => {
      //   if (bIsError)
      //     return this.respond(oResponse, CONFLICT, null, oEmployee);
      //   if (!oEmployee)
      //     return this.respond(oResponse, NOT_FOUND, { message: "Empleado no encontrado" });
      //   (new ServiceController()).getServicesByEmployee(oEmployee.id, aServices => {
      //     return this.respond(oResponse, DONE, { data: aServices });
      //   });
      // });
      this.respond(oResponse, DONE, {pepe: "sdasdad"});
    } catch (oException) {
      return this.respond(oResponse, CONFLICT, null, oException.message);
    }
  }
}

module.exports = ExchangeController;