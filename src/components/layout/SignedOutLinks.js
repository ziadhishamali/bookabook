import React from 'react';
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
      <div>
          <ul className="right hide-on-med-and-down">
              <li><NavLink to="bookabook/sign-in">Sign In</NavLink></li>
              <li><NavLink to="bookabook/sign-up">Sign Up</NavLink></li>
          </ul>

          <ul className="sidenav" id="mobile-links">
              <li><NavLink to="bookabook/sign-in">Sign In</NavLink></li>
              <li><NavLink to="bookabook/sign-up">Sign Up</NavLink></li>
          </ul>
      </div>

  )
};

export default SignedOutLinks