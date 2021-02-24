const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { title, description, startdate, enddate, starttime, endtime } = req.user;

  return res.json({ title, description, startdate, enddate, starttime, endtime });
});

module.exports = router;
