import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import brand from "../../../public/favicon/book-icon-2.png";

const NavBar = ({signedin, user}) => {

    const toggleSideMenu = () => {
        let sideMenu = document.getElementById('side-menu');
        let sideNav = document.getElementById('side-nav');
        sideMenu.classList.toggle('change');
        sideMenu.classList.toggle('move-side-menu');
        sideNav.classList.toggle('show');
    }

    return(
        <div className="nav-container justify align box-shadow-2">
            <div className="flex-row justify-start full-width">
                <Link to="/bookabook/" className="links-title blue-text flex-row large-text margin-right-4 margin-left-4 align justify">
                    <img className="margin-right-- align justify" src={brand} align="center" width="56px" height="56px" alt="5od"/>
                    Book a Book
                </Link>
            </div>
            {signedin ? (<SignedInLinks align={"flex-row"} linksContainer={"links-container"}/>) : (<SignedOutLinks align={"flex-row"} linksContainer={"links-container"} mobile={false}/>)}
            <div id="side-menu" className="side-menu margin-left-4" onClick={() => toggleSideMenu()}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div id="side-nav" className="side-nav">
                {signedin ? (<SignedInLinks align={"flex-column"} linksContainer={"links-container-side"}/>) : (<SignedOutLinks align={"flex-column"} linksContainer={"links-container-side"} mobile={true}/>)}
            </div>
        </div>
    );
};

export default NavBar