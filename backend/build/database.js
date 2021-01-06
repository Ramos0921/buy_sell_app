"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

let connection;
const db = {
  connect: () => {
    connection = _mysql.default.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      socketPath: process.env.DB_SOCKET
    });
    connection.connect();
  },
  query: (queryString, escapedValues) => new Promise((resolve, reject) => {
    connection.query(queryString, escapedValues, (error, results, fields) => {
      if (error) reject(error);
      resolve({
        results,
        fields
      });
    });
  }),
  end: () => connection.end()
};
exports.db = db;