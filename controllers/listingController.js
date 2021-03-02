const { __esModule } = require("react-zipcode");
const db = require("../models");


module.exports= {
    findByZipcode: function (req,res){
        // we need to change req in line 8.
        db.Listing 
        .find({}) 
        .then (dbzip => res.json(dbzip))
    }


}

export default findByZipcode;