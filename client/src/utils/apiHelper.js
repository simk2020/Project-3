import axios from 'axios';

const API = {
  getUser: function() {
    return axios.get(`/api/users/me`);
  },

  newListing: function (listingData){
    return axios.post(`/api/listings`, listingData );
  },

  getListing: function (){
    return axios.get(`/api/listings`);
  }
};

export default API;
