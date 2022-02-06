const oEnvironment = require("@config/Environment");

module.exports = function (oApp) {
  oApp.use(`${oEnvironment.URL_API}api-v1/exchanges`, require("@routes/Exchanges"));
};