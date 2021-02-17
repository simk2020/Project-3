import React, { useContext } from 'react';
import { Store } from '../../store';
import { Link } from 'react-router-dom';
// import bootstrap from "bootstrap";

const Landing = props => {
  const { state } = useContext(Store);

  console.log({ state, props });

  return (

    <div className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>YSale</b> A new and better way to yard sale! {' '} <span style={{ fontFamily: 'monospace' }}>Yard Sale</span> 
          </h4>
          <br />
          <div className="col s3">
            <Link to="/register" className="btn btn-large waves-effect waves-light hoverable blue accent-3" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Register
            </Link>
          </div>
          <div className="col s3">
            <Link to="/login" className="btn btn-large btn-flat waves-effect white black-text" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
