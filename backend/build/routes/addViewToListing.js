"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addViewToListingRoute = void 0;

var _database = require("../database");

const addViewToListingRoute = {
  method: 'POST',
  path: '/api/listings/{id}/add-view',
  handler: async (req, h) => {
    const id = req.params.id;
    await _database.db.query('UPDATE listings SET views=views+1 WHERE id=?', [id]);
    const {
      results
    } = await _database.db.query('SELECT * FROM listings WHERE id=?', [id]);
    const updatedListing = results[0];
    return updatedListing;
  }
};
exports.addViewToListingRoute = addViewToListingRoute;