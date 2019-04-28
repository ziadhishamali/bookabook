import React from 'react';
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
    return (
        <div>
            <ul className="right hide-on-med-and-down">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/sell">Sell/Lend</NavLink></li>
                <li><NavLink to="/buy">Buy/Borrow</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li className="btn btn-floating orange"><NavLink to="/my">Z</NavLink></li>
                <li><NavLink to="/logout">Log out</NavLink></li>
            </ul>

            <ul className="sidenav" id="mobile-links">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/sell">Sell/Lend</NavLink></li>
                <li><NavLink to="/buy">Buy/Borrow</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/logout">Log out</NavLink></li>
            </ul>
        </div>

    )
};

export default SignedInLinks