
require('module-alias/register');
const express = require('express'),
  app = express(),
  cors = require('cors'),
  oBodyParser = require('body-parser'),
  oEnvironment = require('@config/Environment');


// use the modules
app.use(cors({ origin: '*', methods: ['GET', 'PUT', 'POST', 'DELETE'], allowedHeaders: ['Content-Type', 'authorization'] }));
app.use(oBodyParser.json({ limit: '50mb' }));

if (oEnvironment.DEBUG) {
  const oMorgan = require('morgan');
  app.use(oMorgan('dev'));
}


app.use(express.static('./public'));

// Se inicializan las rutas
const oRoutes = require('@routes/Routes');
oRoutes(app);


// Se levanta el servidor
app.listen(oEnvironment.PORT, () => console.log(`Server started and listening port: ${oEnvironment.PORT}`));
