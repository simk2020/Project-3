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

  // getListingsbyUser: function (){
  //   return axios.get(`/api/listings/user`);
  // }

};

export default API;
