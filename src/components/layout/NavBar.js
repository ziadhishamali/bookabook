import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import brand from "../../../public/favicon/book-icon-2.png";
import SignedOutLinks from "./SignedOutLinks";

const NavBar = () => {
    return(
        <nav className="nav-wrapper fixed-top myNav">
            <div className="container">
                <Link to="/bookabook/" className="left"><img className="myBrand" src={brand} align="center" width="60" height="60" alt="a7a"/>Book A Book</Link>
                <Link to="#" className="sidenav-trigger right" data-target="mobile-links"><i className="material-icons">menu</i></Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    );
};

export default NavBar