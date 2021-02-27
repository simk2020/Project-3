const { times } = require('lodash');
const mongoose = require('mongoose');
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
    type: String ,
    required: true,
  },
  endtime: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  user: 
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }

});

module.exports = listing = mongoose.model('listing', ListingSchema);