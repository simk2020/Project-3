import React, { useContext, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './store/actions/authActions';
import { Store } from './store';

import './App.css';

import Navbar from './components/partials/Navbar';
import Landing from './components/pages/Landing';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import PrivateRoute from './components/auth/PrivateRoute';
import Dashboard from './components/pages/Dashboard';
import Footer from "./components/partials/Footer";
import ListingSaleform from "./components/partials/listingSaleform";
const App = () => {
  const { dispatch } = useContext(Store);

  useEffect (() => {
    window.M.AutoInit ();

  }, [])



  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;

      setAuthToken(token);

      dispatch(setCurrentUser(decoded));

      if (decoded.exp < currentTime) {
        dispatch(logoutUser());
        window.location.href = './login';
      }
    }
  }, [ dispatch ]);


  function Submitform() {
    const titleRef = useRef();
    console.log ( titleRef)
  }


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path={["/", "/landing"]}  component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/listing/create" component={ListingSaleform}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
};



export default App;
