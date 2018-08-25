import React from "react";

const Navbar = (props) => (
      <nav className="colors fixed-top navbar nav-height">
        <ul className="row center list-inline nav-fill w-100">
          <li className="col list-inline-item nav-font text-center">
            <a className="navbar-brand" href="/">Twin Peaks Memory Game</a>
          </li>
          <li className="col list-inline-item my-auto nav-font text-center">
            {props.message}
          </li>
          <li className="col list-inline-item my-auto nav-font text-center">
            Score: {props.score} | Top Score: {props.topScore}
          </li>
        </ul>
      </nav>
      
);

export default Navbar;
