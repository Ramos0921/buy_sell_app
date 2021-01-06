"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateListingRoute = void 0;

var _uuid = require("uuid");

var _database = require("../database");

var admin = _interopRequireWildcard(require("firebase-admin"));

const updateListingRoute = {
  method: 'POST',
  path: '/api/listings/{id}',
  handler: async (req, h) => {
    const {
      id
    } = req.params;
    const {
      name,
      description,
      price
    } = req.payload;
    const token = req.headers.authtoken;
    const user = await admin.auth().verifyIdToken(token);
    const userId = user.user_id;
    await _database.db.query('UPDATE listings SET name=?, description=?, price=? WHERE id=? AND user_id=?', [name, description, price, id, userId]);
    const {
      results
    } = await _database.db.query('SELECT * FROM listings WHERE id=? and user_id=?', [id, userId]);
    return results[0];
  }
};
exports.updateListingRoute = updateListingRoute;