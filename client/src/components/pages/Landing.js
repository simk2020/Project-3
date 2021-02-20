import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';
import ListingCard from "../partials/listingCard"
import GoogleApiWrapper from "../partials/googlemap";
import seeds from "../partials/seeds.json";

const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });

  return (

    <div className="container">
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            {/* <b>*YSale</b> A new and better way to yard sale! {' '} <span style={{ fontFamily: 'monospace' }}><b>*</b></span>  */}

            <h1>YardScout</h1> 
            <h2>A New and Better way to Yard Sale! </h2> 
          </h4>
          <br />
          <br />
          <card><h4>Enter your zipcode to get started!</h4>
          
          <div className= "row">
            <div className= "col s2">
          <a href="sass.html"><i class="material-icons left">search</i></a></div>
          <div className= "col s10">
          <input type="text" placeholder="Enter Zipcode" id="autocomplete-input" class="autocomplete tect-center black-text"></input>
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
