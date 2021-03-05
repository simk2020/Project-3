import axios from 'axios';

const API = {
  getUser: function() {
    return axios.get(`/api/users/me`);
  },

  newListing: function (listingData){
    return axios.post(`/api/listings`, listingData );
  },

  getListings: function (){
    return axios.get(`/api/listings`);
  },

  getListingsByUser: function (){
    return axios.get(`/api/listings/user`);
  },

  getListingsByZipcode: function (zipcode){
    return axios.get(`/api/listings/zipcode/${zipcode}`);
  }

};

export default API;
