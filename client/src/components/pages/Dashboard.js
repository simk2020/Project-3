import React, { useEffect, useContext, useState } from 'react';
import { Store } from '../../store';
// import { logoutUser } from '../../store/actions/authActions';
import API from '../../utils/apiHelper';
import ListingCard from "../partials/listingCard"
import seeds from "../partials/seeds.json";
import { Link } from 'react-router-dom';
import("../partials/style.css")


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

    API.getListingsByUser()
      .then((res) => {
        console.log(res.data)
        setlistingarray(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])



  return (

    <div className="container">

      <div className="row">
        <div className="card-panel col s12 center-align z-depth-10" id="outside-banner">

          <div className="card-panel center-align">
            <div className="row">
              <div className="col s12">
                <h4><b>Hey there, {user.name.split(' ')[0]}</b></h4>
                {/* <h5 className="flow-text black-text text-darken-1"> */}
                <br />
                <h4>Welcome to YardScout!</h4>
                <br />
                <h5>Search for local sales or click "post your sale" to list your own
                {/* {' '} <span style={{ fontFamily: 'monospace' }}></span> */}
                </h5>
                <br />
                <br />
                <br />
              </div>
            </div>


            <div className="row">
              {/* <div className="col s12 center-align "> */}
              <div className="col s2"></div>
              <div className="col s4">
                <Link to="/listing/create" className="col s5 waves-effect waves-light btn-small center-align">Post your Sale</Link>
              </div>

              {/* <p className="col s2 center-align"></p> */}
              <p className="col s2 center-align">Payment:</p>

              <a href="https://cash.app" className="col s2 waves-effect waves-light btn-small fa d-flex justify-content-center ">CashApp</a>
             
              <a href="https://venmo.com" className="col s2 waves-effect waves-light btn-small fa d-flex justify-content-center">Venmo</a>
              <br />
              <br />

            </div>

            <div className="row">
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

              {/* </div> */}
              {/* </div> */}
            </div>

          </div>

          {/* </div> */}
        </div>
      </div>

    </div >

  );

};

export default Dashboard;