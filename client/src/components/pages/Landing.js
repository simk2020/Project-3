import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';
import ListingCard from "../partials/listingCard"
import seeds from "../partials/seeds.json";
import Carousel from "../partials/carousel";
import Zipcode from "../partials/zipcodesearch";
//import { Map, GoogleApiWrapper } from 'google-maps-react';
import Googlemap from '../partials/googlemap';

const search = (e) => {
  e.preventDefault()
};

const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });

  return (

    <div className="container"style={{
      width: '100%',
      borderRadius: '3px',
      letterSpacing: '1.5px',

    }}>
      <div className="row">
        <div className="card-panel col s12 center-align" id="outside-banner">
          {/* <Carousel/> */}
          {/* <b>*YSale</b> A new and better way to yard sale! {' '} <span style={{ fontFamily: 'monospace' }}><b>*</b></span>  */}
          <div className="card-panel center-align">
                      <h2><b>YardScout</b></h2>
          <h4>A Better Way To Yard Sale! </h4>
          <br />
          <br />
          <div>
            </div>
            </div>
            <h5>Enter your zipcode to get started!</h5>
            <div className="row" style={{
              // width: '75%',
              // borderRadius: '3px',
              // letterSpacing: '1.5px',
            }}>

              <div className="col s12 center-align" style={{
              // width: '20%',
              // borderRadius: '3px',
              // textAlign: '50%',
              // letterSpacing: '1.5px',
            }}>
              <Zipcode/>

                <ul id="dropdown2" class="dropdown-content">
                  <li><a href="www.google.com">5 miles<span class="badge"></span></a></li>
                  <li><a href="#!">10 miles<span class="badge"></span></a></li>
                  <li><a href="#!">15 miles</a></li>
                </ul>
                <a class="btn dropdown-trigger waves-light" href="#!" data-target="dropdown2">Choose Miles<i class="material-icons right">arrow_drop_down</i></a>
                <br />
                <br />

                <div className="col s12 center-align ">
                <button class="btn waves-effect waves-light" onClick={search} name="action">search
    <i class="material-icons right">search</i>
          </button>
          </div>
                
                
              </div>
            </div>

          {/* </div> */}


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
      </div>
    </div>
  );
}

export default Landing;
