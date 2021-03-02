const express = require('express');
const router = express.Router();

const Listing = require('../models/Listing');
const listingController = require("../controllers/listingController")

router.get('/', (req, res) => {
  const { _id, name, email, date } = req.user;
  const { title, description, startdate, enddate, starttime, endtime, address, zipcode  } = req.body;
  console.log ({ title, description, startdate, enddate, starttime, endtime, address, zipcode  });
});

router.post('/', (req, res) => {
  const { _id, name, email, date } = req.user;
  const { title, description, startdate, enddate, starttime, endtime, address, zipcode  } = req.body;
  
  console.log ({ title, description, startdate, enddate, starttime, endtime, address, zipcode  });

router.route('/searchZip')
.get(listingController.findByZipCode)

const newListing = new Listing({
  title,
  description,
  startdate,
  enddate,
  starttime,
  endtime,
  address,
  zipcode,
  user:_id
});

newListing.save()

.then(listing => res.json(listing))

.catch(err => res.status(500).json({message:err.message}));

});

module.exports = router;
