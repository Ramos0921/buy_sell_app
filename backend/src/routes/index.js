import { getAllListingsRoute } from './getAllListings';
import { getListingsRoute } from './getListing';
import { addViewToListingRoute } from './addViewToListing';
import { getUserListingsRoute } from './getUserListings';
import { createNewListingRoute } from './createNewListing';
import { updateListingRoute } from './updateListings';
import { deleteListingRoute } from './deleteListing'

export const routes = [
  getAllListingsRoute,
  getListingsRoute,
  addViewToListingRoute,
  getUserListingsRoute,
  createNewListingRoute,
  updateListingRoute,
  deleteListingRoute,
]