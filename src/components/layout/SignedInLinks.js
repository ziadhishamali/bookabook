import React from 'react';
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
    return (
        <div>
            <ul className="right hide-on-med-and-down">
                <li><NavLink exact to="bookabook/">Home</NavLink></li>
                <li><NavLink to="bookabook/sell">Sell/Lend</NavLink></li>
                <li><NavLink to="bookabook/buy">Buy/Borrow</NavLink></li>
                <li><NavLink to="bookabook/about">About</NavLink></li>
                <li className="btn btn-floating orange"><NavLink to="bookabook/my">Z</NavLink></li>
                <li><NavLink to="bookabook/logout">Log out</NavLink></li>
            </ul>

            <ul className="sidenav" id="mobile-links">
                <li><NavLink exact to="bookabook/">Home</NavLink></li>
                <li><NavLink to="bookabook/sell">Sell/Lend</NavLink></li>
                <li><NavLink to="bookabook/buy">Buy/Borrow</NavLink></li>
                <li><NavLink to="bookabook/about">About</NavLink></li>
                <li><NavLink to="bookabook/logout">Log out</NavLink></li>
            </ul>
        </div>

    )
};

export default SignedInLinks