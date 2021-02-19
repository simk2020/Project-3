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

            <span> YardScout - A New and Better way to Yard Sale! </span> 
          </h4>
          <br />
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
