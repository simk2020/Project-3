import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';
import ListingCard from "../partials/listingCard"
import GoogleApiWrapper from "../partials/googlemap";
import seeds from "../partials/seeds.json";
import Carousel from "../partials/carousel";
import Zipcode from "../partials/zipcodesearch"

const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });

  return (

    <div className="container"style={{
      width: '75%',
      borderRadius: '3px',
      letterSpacing: '1.5px',

    }}>
      <div className="row">
        <div className="col s12 center-align">
          {/* <Carousel/> */}
          {/* <b>*YSale</b> A new and better way to yard sale! {' '} <span style={{ fontFamily: 'monospace' }}><b>*</b></span>  */}
          <h2>YardScout</h2>
          <h4>A New and Better way to Yard Sale! </h4>
          <br />
          <br />
          <card>
            <h5>Enter your zipcode to get started!</h5>
            <div className="row" style={{
              // width: '75%',
              // borderRadius: '3px',
              // letterSpacing: '1.5px',
            }}>

              <div className="col s12 center-align ">
              <Zipcode/>
                <ul id="dropdown2" class="dropdown-content">
                  <li><a href="www.google.com">5 miles<span class="badge"></span></a></li>
                  <li><a href="#!">10 miles<span class="badge"></span></a></li>
                  <li><a href="#!">15 miles</a></li>
                </ul>
                <a class="btn dropdown-trigger" href="#!" data-target="dropdown2">choose Miles<i class="material-icons right">arrow_drop_down</i></a>
                <br />
                <br />

                <div className="col s12 center-align ">
                  <a href="sass.html"><i class="material-icons">search</i></a></div>
                
                
              </div>
            </div>

          </card>

          <div className="col s6">
            <card className="salesMap">
              <h5> Listing on the Map</h5>
              
              {/* <GoogleApiWrapper/> */}

            </card>
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


        </div>
      </div>
    </div>
  );
}

export default Landing;
