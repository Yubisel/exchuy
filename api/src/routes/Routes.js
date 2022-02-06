const oEnvironment = require("@config/Environment");

module.exports = function (oApp) {
  oApp.use(`${oEnvironment.URL_API}exchanges`, require("@routes/Exchanges"));
};