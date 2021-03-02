import React, { useEffect, useContext, useState} from 'react';
import { Store } from '../../store';
// import { logoutUser } from '../../store/actions/authActions';
import API from '../../utils/apiHelper';
import ListingCard from "../partials/listingCard"

import seeds from "../partials/seeds.json";
import { Link } from 'react-router-dom';
import Googlemap from '../partials/googlemap';
import ("../partials/style.css")
const Dashboard = props => {
  const [listingarray, setlistingarray] = useState([]);
  const { state, dispatch } = useContext(Store);
  const user = state.auth.user;

  useEffect(() => {
    if (!state.auth.isAuthenticated)
      props.history.push('/login');

    API.getUser()
      .then(res => console.log({ res }))
      .catch(err => console.log({ err }));
  }, [state, props]);


  useEffect(() => {

    console.log("Dashboard")
    setlistingarray([
      {
        title:"listing.title",
        image:"listing.image",
        description:"listing.description",
        date:"listing.date",
        time:"listing.time",
        address:"listing.address",
      }

      
    ])
  })
  // fetch all the listings when the component mounts....go into state.
  // itirate ...display them thru the listing card component.
  // handle the actual listing card to navigate the user to an more detailed listing page.  

  return (

    <div className="container center-align" style={{
      width: '100%',
      borderRadius: '3px',
      letterSpacing: '1.5px',
    }}>


      <div className="card-panel valign-wrapper">
        <div className="row">
          <div className="heading col s12 center-align">
            <h4><b>Hey there,</b> {user.name.split(' ')[0]} </h4>
            <p className="flow-text grey-text text-darken-1">
              Welcome to YS - Your one stop Yard Sale App{' '} <span style={{ fontFamily: 'monospace' }}></span></p>
          </div>


          <div className="row">
            <div className="col s12 center-align ">
              <Link to="/listing/create" className="col s5 waves-effect waves-light btn-small">Post your Sale</Link>

              <p className="col s2 center-align " ></p>
              <p className="col s2 center-align " >Payment:</p>

              <a href="https://cash.app" className="col s2 waves-effect waves-light btn-small fa d-flex justify-content-center ">CashApp</a>
              <br />
              <a href="https://venmo.com" className="col s2 waves-effect waves-light btn-small fa d-flex justify-content-center">Venmo</a>
              <br />
              <br />

              <div className="col s6 salesList">
                <h4><b>{user.name.split(' ')[0]}'s Listings:</b> </h4>

                {
                  listingarray.map(listing => (
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
          </div>
        </div>
      </div>
    </div >
  
  );
  
};



export default Dashboard;
