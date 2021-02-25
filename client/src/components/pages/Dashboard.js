import React, { useEffect, useContext } from 'react';
import { Store } from '../../store';
// import { logoutUser } from '../../store/actions/authActions';
import API from '../../utils/apiHelper';
import ListingCard from "../partials/listingCard"

import seeds from "../partials/seeds.json";
import { Link } from 'react-router-dom';
import Googlemap from '../partials/googlemap';

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

    <div className="container center-align"style={{
      width: '100%',
      borderRadius: '3px',
      letterSpacing: '1.5px',

    }}>

    <div className="card-panel valign-wrapper">
      <div className="row">
        <div className="card-panel col s12 center-align"
        style={{
      width: '100%',
      borderRadius: '3px',
      letterSpacing: '1.5px',

    }}>
          <h4>
            <b>Hey there,</b> {user.name.split(' ')[0]}
            <p className="flow-text grey-text text-darken-1">
              Welcome to YS - Your one stop Yard Sale App{' '} <span style={{ fontFamily: 'monospace' }}></span>
            </p>
          </h4>
          </div>
          <div className="row">
            <div className="col center-align ">
              <Link to="/listing/create" className="col s4 waves-effect waves-light btn-small">Post your Sale</Link>

              <p className="col s2 center-align " ></p>
              <p className="col s3 center-align " >Payment:</p>

              <a href="https://cash.app" className="col s3 waves-effect waves-light btn-small fa d-flex justify-content-center ">CashApp</a>
              <br />
              <a href="https://venmo.com" className="col s3 waves-effect waves-light btn-small fa d-flex justify-content-center">Venmo</a>
              <br />
              <br />

              <div className="col s6">
            <div className="salesMap">
              <h5> Listing on the Map</h5>
              
              <Googlemap/>

            </div>
          </div>

              <div className="col s6 salesList">
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
              </div>

          </div>
        {/* </div> */}
      </div>
      </div>

      {/* click event for "post the sale button" to render "clear the content of the page and then "listing sale form" and  */}

    </div>
    </div >
  );
};



export default Dashboard;
