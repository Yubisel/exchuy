const cheerio = require("cheerio");
const axios = require("axios");
const { DONE } = require("@config/StatusCode");

class CotizationDolar {
  constructor() {
    this.siteName = "";
    this.method = "GET";
    this.url = "https://uy.cotizacion-dolar.com/cotizacion-hoy-uruguay.php";
    this.headers = [
      {
        index: "initial",
        description: "Inicial"
      },
      {
        index: "name",
        description: "Moneda",

      },
      {
        index: "purchase",
        description: "Compra",

      },
      {
        index: "sale",
        description: "Venta",

      },
      {
        index: "avg",
        description: "Promedio",

      }
    ];
    this.exchangesRates = [];
  }

  getExchange = async () => {
    let sPurchase, sSale, 
    _self = this;

    const oCall = await axios({
      method: this.method,
      url: this.url
    });

    if (oCall.status === DONE) {
      let $ = cheerio.load(oCall.data);
      $("[itemprop=itemListElement]", ".cotizacion-contenido").each(function () {
        sPurchase = Number($(this).find(".cc-2b .cotizacion-num").text().replace("$ ", "").trim());
        sSale = Number($(this).find(".cc-3b .cotizacion-num").text().replace("$ ", "").trim());
        _self.exchangesRates.push({
          initial: $(this).find(".cotizacion-billete").prop("content"),
          name: $(this).find(".cotizacion-billete b").text(),
          purchase: sPurchase,
          sale: sSale,
          avg: Number(((sPurchase + sSale) / 2).toFixed(2))
        });
      });
    }

    return {
      siteName: this.siteName,
      url: this.url,
      headers: this.headers,
      exchangesRates: this.exchangesRates
    };

  }
}

module.exports = CotizationDolar;