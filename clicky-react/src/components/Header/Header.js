import React from 'react';
import './Header.css';

const Header = (props) => (
  <div className="align-items-center bg-header colors-header jumbotron header-hgt header-pad head-mar-top text-center yx-auto text-center">
    <h1 className="header-font" >Click on an image to earn points,</h1>
    <h1 className="header-font">but don't click on any more than once!</h1>
  </div>
);

export default Header;