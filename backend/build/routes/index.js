"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _getAllListings = require("./getAllListings");

var _getListing = require("./getListing");

var _addViewToListing = require("./addViewToListing");

var _getUserListings = require("./getUserListings");

var _createNewListing = require("./createNewListing");

var _updateListings = require("./updateListings");

var _deleteListing = require("./deleteListing");

const routes = [_getAllListings.getAllListingsRoute, _getListing.getListingsRoute, _addViewToListing.addViewToListingRoute, _getUserListings.getUserListingsRoute, _createNewListing.createNewListingRoute, _updateListings.updateListingRoute, _deleteListing.deleteListingRoute];
exports.routes = routes;