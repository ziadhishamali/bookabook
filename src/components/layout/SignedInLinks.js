import React from 'react';
import firebase from '../auth/firebase';
import { NavLink } from "react-router-dom";

const SignedInLinks = ({align, linksContainer, user}) => {
    let initials = "";
    if (user) {
        initials = user.firstName ? user.firstName[0] || "" : "";
        initials += user.lastName ? user.lastName[0] || "" : "";
    }
    return (
        <div className={align + " justify-start align " + linksContainer}>
            <NavLink exact to="/" className="links"><span>Home</span></NavLink>
            <NavLink to="/sell" className="links"><span>Sell/Lend</span></NavLink>
            <NavLink to="/buy" className="links"><span>Buy/Borrow</span></NavLink>
            <NavLink to="/about" className="links"><span>About</span></NavLink>
            <NavLink to="/profile" className="links profile-link"><span>{initials}</span></NavLink>
            <NavLink to="/" className="links signup-nav" onClick={async() => {await firebase.auth().signOut(); localStorage.removeItem('uid')}}><span>Log out</span></NavLink>
        </div>
    )
};

export default SignedInLinks