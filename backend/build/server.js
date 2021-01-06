"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _hapi = _interopRequireDefault(require("@hapi/hapi"));

var _routes = require("./routes");

var _database = require("./database");

var admin = _interopRequireWildcard(require("firebase-admin"));

var _credentials = _interopRequireDefault(require("../../credentials.json"));

_dotenv.default.config();

admin.initializeApp({
  credential: admin.credential.cert(_credentials.default)
});
let server;

const start = async () => {
  server = _hapi.default.server({
    port: 8080,
    host: '0.0.0.0'
  });

  _routes.routes.forEach(route => server.route(route));

  _database.db.connect();

  await server.start();
  console.log(`Server is listening on port ${server.info.uri}`);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});
process.on('SIGINT', async () => {
  console.log('stopping server');
  await server.stop({
    timeout: 1000
  });

  _database.db.end();

  console.log('stopped');
  process.exit(0);
});
start();