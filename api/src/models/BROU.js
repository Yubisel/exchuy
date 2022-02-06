const cheerio = require("cheerio");
const axios = require("axios");
const { DONE } = require("@config/StatusCode");

class BROU {
 constructor() {
    this.siteName = "BROU";
    this.method = "POST";
    this.url = "https://www.brou.com.uy/c/portal/render_portlet?p_l_id=20593&p_p_id=cotizacionfull_WAR_broutmfportlet_INSTANCE_otHfewh1klyS";
    this.headers = [
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
    this.excahngesRates = [];
  }

  getExchange = async () => {
    let sCoin, sPurchase, sSale, 
    _self = this;

    const oCall = await axios({
      method: this.method,
      url: this.url
    });


    if (oCall.status === DONE) {
      let $ = cheerio.load(oCall.data);
      $("tr", "table").each(function () {
        sCoin = $(this).find(".moneda").text().trim();
        if (sCoin !== "") {
          sPurchase = Number($(this).find(".valor").eq(0).text().replace(",", ".").trim());
          sSale = Number($(this).find(".valor").eq(1).text().replace(",", ".").trim());
          _self.excahngesRates.push({
            name: sCoin,
            purchase: sPurchase,
            sale: sSale,
            avg: Number(((sPurchase + sSale) / 2).toFixed(2))
          });
        }
      });
    }

    return {
      siteName: this.siteName,
      url: this.url,
      headers: this.headers,
      excahngesRates: this.excahngesRates
    };

  }
}

module.exports = BROU;
