import React from 'react';

const Footer = props => {
  const year = new Date().getFullYear();

  return (
   
    <footer className="page-footer">
    <div className="footer-copyright">
      <div className="container" >
      <center font-color-white>© 2021 by Sim & Sarah</center>
      </div>
    </div>
  </footer>
  ); 
};

export default Footer;
