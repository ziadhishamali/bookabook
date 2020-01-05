import React from 'react';
import firebase from '../auth/firebase';
import { NavLink } from "react-router-dom";

const SignedInLinks = ({align, linksContainer}) => {
    return (
        <div className={align + " justify-start align " + linksContainer}>
            <NavLink exact to="/bookabook/" className="links"><span>Home</span></NavLink>
            <NavLink to="/bookabook/sell" className="links"><span>Sell/Lend</span></NavLink>
            <NavLink to="/bookabook/buy" className="links"><span>Buy/Borrow</span></NavLink>
            <NavLink to="/bookabook/about" className="links"><span>About</span></NavLink>
            <NavLink to="/bookabook/my" className="links profile-link"><span>Z</span></NavLink>
            <NavLink to="/bookabook/" className="links signup-nav" onClick={async() => {await firebase.auth().signOut(); localStorage.removeItem('uid')}}><span>Log out</span></NavLink>
        </div>
    )
};

export default SignedInLinks