"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getListingsRoute = void 0;

var _database = require("../database");

var _boom = _interopRequireDefault(require("@hapi/boom"));

const getListingsRoute = {
  method: 'GET',
  path: '/api/listings/{id}',
  handler: async (req, h) => {
    const id = req.params.id;
    const {
      results
    } = await _database.db.query('SELECT * FROM listings WHERE ID=?', [id]);
    const listing = results[0];

    if (!listing) {
      throw _boom.default.notFound(`The requested listing with id ${id} does not exist`);
    }

    return listing;
  }
};
exports.getListingsRoute = getListingsRoute;