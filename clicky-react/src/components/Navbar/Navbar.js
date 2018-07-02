import React from "react";

const Navbar = (props) => (
      <nav className="fixed-top navbar navbar-expand-lg bg-dark">
        <ul className="row center list-inline nav-fill w-100">
          <li className="col list-inline-item text-center">
            <a className="navbar-brand text-white" href="/">Clicky Game</a>
          </li>
          <li className="col list-inline-item my-auto text-center text-white">
            {props.message}
          </li>
          <li className="col list-inline-item my-auto text-center text-white">
            Score: {props.score} | Top Score: {props.topScore}
          </li>
        </ul>
      </nav>
      
);

export default Navbar;
