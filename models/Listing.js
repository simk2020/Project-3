const { times } = require('lodash');
const mongoose = require('mongoose');
const { default: Zipcode } = require('../client/src/components/partials/zipcodesearch');
const Schema = mongoose.Schema;

const ListingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  
  description: String,
  
  startdate: {
    type: Date,
    default: Date.now,
  },
  enddate: {
    type: Date,
  },
  starttime: {
    type: TimeRanges ,
    required: true,
  },
  endtime: {
    type: TimeRanges,
    required: true,
  },
  address: {
    type: PaymentAddress,
    required: true,
  },
  zipcode: {
    type: Zipcode,
    required: true,
  },








});

module.exports = User = mongoose.model('User', UserSchema);