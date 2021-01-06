"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteListingRoute = void 0;

var _database = require("../database");

var admin = _interopRequireWildcard(require("firebase-admin"));

const deleteListingRoute = {
  method: 'DELETE',
  path: '/api/listings/{id}',
  handler: async (req, h) => {
    const {
      id
    } = req.params;
    const token = req.headers.authtoken;
    const user = await admin.auth().verifyIdToken(token);
    const userId = user.user_id;
    await _database.db.query('DELETE FROM listings WHERE id=? AND user_id=?', [id, userId]);
    return {
      message: "Success!"
    };
  }
};
exports.deleteListingRoute = deleteListingRoute;