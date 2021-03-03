const express = require('express');
const router = express.Router();

const Listing = require('../models/Listing');
const listingController = require("../controllers/listingController")

module.exports = (app, requiresAuth) =>{
  app.get('/api/listings', listingController.findAllListings);

  app.post('/api/listings', requiresAuth, listingController.createListing);

  app.get('/api/listings/user', requiresAuth, listingController.findListingByUser);
};
