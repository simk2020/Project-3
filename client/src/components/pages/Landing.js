import React, { useContext, useEffect, useState, useRef } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';
import ListingCard from "../partials/listingCard"
import seeds from "../partials/seeds.json";
import Zipcode from "../partials/zipcodesearch";
import Googlemap from '../partials/googlemap';
import "../partials/style.css";
import API from "../../utils/apiHelper";



const Landing = props => {
const zipcodeRef = useRef ();
  const [listingarray, setlistingarray] = useState([]);
  const [zipsearcharray, setzipsearcharray] = useState([]);
  const { state } = useContext(Store);

  console.log({ state, props });
  console.log(listingarray, setlistingarray);
  console.log(zipsearcharray, setzipsearcharray);
  useEffect(() => {

    console.log("Landing")

    API.getListings()
      .then((res) => {
        console.log(res.data)
        setlistingarray(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const search = (value) => {
    console.log("this is the zipcode", value);
    console.log("zipcode search array")
    API.getListingsByZipcode(value)
      .then((value) => {
        console.log(value.data)
        setzipsearcharray(value.data)
      })
      .catch((err) => {
        console.log("No listing found", err)
      })
  }

  const clearsearcharray = ()=> {
    setzipsearcharray ([])
  }




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

            <div className="col s4 offset-s4 center-align" >

              <Zipcode  banana={search} />

              <div className="col s12 center-align ">
                <button class="btn waves-effect waves-light" onClick={clearsearcharray} name="action">clear
                <i class="material-icons right">search</i>

                </button>
              </div>


            </div>
          </div>


          <div className="card col s6 salesList">
            <h5>Current Listings</h5>
            {
              zipsearcharray.length ?
              zipsearcharray.map(listing => (
                <ListingCard
                  title={listing.title}
                  image={listing.image}
                  description={listing.description}
                  startdate={listing.startdate}
                  enddate={listing.enddate}
                  starttime={listing.starttime}
                  endtime={listing.endtime}
                  address={listing.address}
                  zipcode={listing.zipcode}
                />
              ))
              :
              listingarray.map(listing => (
                <ListingCard
                  title={listing.title}
                  image={listing.image}
                  description={listing.description}
                  startdate={listing.startdate}
                  enddate={listing.enddate}
                  starttime={listing.starttime}
                  endtime={listing.endtime}
                  address={listing.address}
                  zipcode={listing.zipcode}
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