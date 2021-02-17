import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">YardSale</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <div className="col">
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
      </ul>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Enter Zipcode" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search Sale</button>
      </form>
    </div>
  </nav>
);
};

export default Navbar;
