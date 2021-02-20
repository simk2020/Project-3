import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
import { logoutUser } from '../../store/actions/authActions';
import API from '../../utils/apiHelper';
import LandingSale from "../partials/listingSaleform"
import ListingCard from "../partials/listingCard"
// import GoogleApiWrapper from "../partials/googlemap";
import seeds from "../partials/seeds.json";
import { Link } from 'react-router-dom';

const Dashboard = props => {
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user;

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
      .then(res => console.log({ res }))
      .catch(err => console.log({ err }));
  }, [state, props]);



  return (
    <div className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Hey there,</b> {user.name.split(' ')[0]}
            <p className="flow-text grey-text text-darken-1">
              Welcome to YS - Your one stop Yard Sale App{' '} <span style={{ fontFamily: 'monospace' }}></span>
            </p>
          </h4>

          <div className="row">
            <div className="col center-align ">
              <Link to = "/listing/create"  className ="col s3 waves-effect waves-light btn-small">Post your Sale</Link>
              
              <p className="col s3 center-align " >Payment Method</p>
              <a className="col s3 waves-effect waves-light btn-small"><i className="material-icons left">cloud</i>Cash App</a>
              <a className="col s3 waves-effect waves-light btn-small"><i className=" material-icons left">cloud</i>Venmo</a>
              <br />
              <br />
            

              <div className="col s6">
              <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Yard Sale Map</span>
          {/* <img>src ="" href </img> */}
        </div>
        <div class="card-action">
          <a href="#">Google Maps</a>
          
        </div>
      </div>
    </div>
  </div>
              </div>

              <div className="col s6">
                <card className="salesList">
                  <h5>Current Listings</h5>

                  {
                    seeds.map(listing => (
                      <ListingCard
                        title={listing.title}
                        image={listing.image}
                        description={listing.description}
                        date={listing.date}
                        time={listing.time}
                        address={listing.address}


                      />
                    ))
                  }

                </card>
              </div>

              {/* <p> Create Listing
          <LandingSale />
              </p> */}

              
            </div>
          </div>
        </div>

{/* click event for "post the sale button" to render "clear the content of the page and then "listing sale form" and  */}

      </div>
    </div>
  );
};



export default Dashboard;
