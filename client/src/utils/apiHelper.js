import axios from 'axios';

const userController = {
  getUser: function() {
    return axios.get(`/api/users/me`);
  },

  newListing: function (listingData){
    return axios.post(`/api/listings`, listingData );
  }
};

export default userController;
