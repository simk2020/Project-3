import React, {useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { logoutUser } from '../../store/actions/authActions';
import { Store } from '../../store';


const Navbar = props => {
  const { state, dispatch } = useContext(Store);
  const history = useHistory();

  const onLogoutClick = e => {
    e.preventDefault();

    logoutUser(history)(dispatch);
  };

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

          <li className="col s3">
            
            <button onClick={onLogoutClick} className="btn btn-flat black-text hoverable" style={{
              width: '140px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
            }}>
              Logout
            </button>
          </li>
          {/* <li><a href="sass.html"><i class="material-icons left">search</i></a></li>
          <li><input type="text" placeholder="Enter Zipcode" id="autocomplete-input" class="autocomplete tect-center black-text" ></input></li> */}
        
        
      </ul>
    </div>
  </nav>
  



  //  
        
    
    
);
};

export default Navbar;
