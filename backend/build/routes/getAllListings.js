"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllListingsRoute = void 0;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _database = require("../database");

const getAllListingsRoute = {
  method: 'GET',
  path: '/api/listings',
  handler: async (req, h) => {
    const {
      results
    } = await _database.db.query('SELECT * FROM listings');
    return results;
  }
};
exports.getAllListingsRoute = getAllListingsRoute;