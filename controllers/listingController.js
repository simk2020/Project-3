
const Listing = require("../models/Listing");


module.exports= {
    findAllListings: function (req,res){
        // we need to change req in line 8.
        Listing 
        .find({}) 
        .then (all => res.json(all))
    },

    // findListingByUser: function (req,res){
    //     Listing 
    //     .find({_id: req.user._id}) 
    //     .then (dbzip => res.json(dbzip))},


     createListing: function (req, res){
        const { _id, name, email, date } = req.user;
        const { title, description, startdate, enddate, starttime, endtime, address, zipcode  } = req.body;
        console.log ({ title, description, startdate, enddate, starttime, endtime, address, zipcode  });
      
      
      
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
      
      }

    

}