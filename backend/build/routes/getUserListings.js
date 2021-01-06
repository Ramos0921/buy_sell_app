"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserListingsRoute = void 0;

var _database = require("../database");

var admin = _interopRequireWildcard(require("firebase-admin"));

const getUserListingsRoute = {
  method: 'GET',
  path: '/api/users/{userId}/listings',
  handler: async (req, h) => {
    const token = req.headers.authtoken;
    const user = await admin.auth().verifyIdToken(token);
    const userId = req.params.userId;
    if (user.user_id !== userId) throw Boom.unauthorized('user not authorized!');
    const {
      results
    } = await _database.db.query('SELECT * FROM listings WHERE user_id=?', [userId]);
    return results;
  }
};
exports.getUserListingsRoute = getUserListingsRoute;