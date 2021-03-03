import React, { useContext,useEffect, useState } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';
import ListingCard from "../partials/listingCard"
import seeds from "../partials/seeds.json";
import Zipcode from "../partials/zipcodesearch";
import Googlemap from '../partials/googlemap';
import "../partials/style.css";
import API from "../../utils/apiHelper";

const search = (e) => {
  e.preventDefault()
};

const Landing = props => {
  const [listingarray, setlistingarray] = useState([]);
  const { state } = useContext(Store);

  console.log({ state, props });
  console.log(listingarray, setlistingarray);

  useEffect(() => {

    console.log("Landing")

    API.getListings()
    .then((res)=>{
      console.log (res.data)
      setlistingarray(res.data)
    })
    .catch((err) => {
      console.log (err)
    })
  },[])

  return (
    
    <div className="container">
      <div className="row">
        <div className="card-panel col s12 center-align z-depth-10" id="outside-banner">
          <div className="card-panel center-align">
            <h2><b>YardScout</b></h2>
            <h4>A Better Way To Yard Sale! </h4>
            <br />
            <br />
            <div>
            </div>
          </div>
          <h5>Enter your zipcode to get started!</h5>
          <div className="row">

            <div className="col s12 center-align" >
              <input></input>
              {/* <Zipcode /> */}
              {/* 
              <ul id="dropdown2" class="dropdown-content">
                <li><a href="www.google.com">5 miles<span class="badge"></span></a></li>
                <li><a href="#!">10 miles<span class="badge"></span></a></li>
                <li><a href="#!">15 miles</a></li>
              </ul>
              <a class="btn dropdown-trigger waves-light" href="#!" data-target="dropdown2">Choose Miles<i class="material-icons right">arrow_drop_down</i></a>
              <br />
              <br /> */}

              <div className="col s12 center-align ">
                <button class="btn waves-effect waves-light" onClick={search} name="action">search
                <i class="material-icons right">search</i>
                
                </button>
              </div>


            </div>
          </div>


          <div className="card col s6 salesList">
            <h5>Current Listings</h5>
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

          <div className="card col s6 salesMap">
            <h5> Listing on the Map</h5>
            <div className="card">
              <Googlemap />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Landing;