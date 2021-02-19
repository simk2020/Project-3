import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (

    <nav>
    <div className=" navbar-fixed nav-wrapper">
      <a href="#" className="brand-logo">Yard Scout</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        
        <li className="col">
            <Link to="/landing" className="btn btn-flat black-text hoverable" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Home
            </Link>
            </li>
        <li className="col">
            <Link to="/register" className="btn btn-flat  black-text hoverable" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Register
            </Link>
          </li>
          <li className="col s3">
            <Link to="/login" className="btn btn-flat black-text hoverable" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Login
            </Link>
          </li>
          <li><input type="text" placeholder="Enter Zipcode" id="autocomplete-input" class="autocomplete tect-center red-text" ></input></li>
        <li><a href="sass.html"><i class="material-icons left">search</i></a></li>
        
      </ul>
    </div>
  </nav>

  //  
        
    
    
);
};

export default Navbar;
