import React from 'react';
import './Header.css';

const Header = (props) => (
  <div className="align-items-center bg-header jumbotron header-hgt header-pad head-mar-top nav-shadow text-center tp-text yx-auto text-center">
    <h1 className="header-font">CLICK ON AN IMAGE TO EARN POINTS,</h1>
    <h1 className="header-font">BUT DON'T CLICK ON ANY MORE THAN ONCE!</h1>
  </div>
);

export default Header;