import React from "react";

const Navbar = (props) => (
      <nav className="navbar navbar-expand-lg bg-dark">
        <ul className="row center list-inline nav-fill w-100">
          <li className="col list-inline-item text-center">
            <a className="navbar-brand text-white" href="/">Clicky Game</a>
          </li>
          <li className="col list-inline-item my-auto text-center text-white">
            Click an image to begin!
          </li>
          <li className="col list-inline-item my-auto text-center text-white">
            Score: 0 | Top Score: 0
          </li>
        </ul>
      </nav>
      
);

export default Navbar;
