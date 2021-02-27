import React from 'react';
import style from "./style.css";
// import bootstrap from "bootstrap-react";


const Footer = props => {
  const year = new Date().getFullYear();

  return (
   
    <footer className="page-footer footer mt-auto bg-light main ">
    <div className="footer-copyright">
      <div className="container body" >
      <center font-color-white>© 2021 by Sim & Sarah</center>
      </div>
    </div>
  </footer>
  ); 
};

export default Footer;
