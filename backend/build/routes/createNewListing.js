"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewListingRoute = void 0;

var _uuid = require("uuid");

var _database = require("../database");

var admin = _interopRequireWildcard(require("firebase-admin"));

const createNewListingRoute = {
  method: 'POST',
  path: '/api/listings',
  handler: async (req, h) => {
    const token = req.headers.authtoken;
    const user = await admin.auth().verifyIdToken(token);
    const userId = user.user_id;
    const id = (0, _uuid.v4)();
    const {
      name = '',
      description = '',
      price = 0
    } = req.payload;
    const views = 0;
    await _database.db.query(`
      INSERT INTO listings (id, name, description, price, user_id, views)
        VALUES (?, ?, ?, ?, ?, ?);
    `, [id, name, description, price, userId, views]);
    return {
      id,
      name,
      description,
      price,
      user_id: userId,
      views
    };
  }
};
exports.createNewListingRoute = createNewListingRoute;