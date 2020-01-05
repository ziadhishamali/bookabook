import React from 'react';
import { NavLink } from "react-router-dom";

const SignedOutLinks = ({align, linksContainer, mobile}) => {
  return (
        <div className={align + " justify-start align " + linksContainer}>
            <NavLink to="/bookabook/signin" className={mobile ? "links" : "links signin-nav"}><span>Sign In</span></NavLink>
            <NavLink to="/bookabook/signup" className={mobile ? "links" : "links signup-nav"}><span>Sign Up</span></NavLink>
        </div>

  )
};

export default SignedOutLinks