const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { _id, name, email, date } = req.user;
  const { title, description, startdate, enddate, starttime, endtime, address, zipcode  } = req.body;
  
  console.log ({ title, description, startdate, enddate, starttime, endtime, address  });

// use  mongoose model for listing and save that to the data base.

  return res.json({ _id, name, email, date });
});

module.exports = router;
