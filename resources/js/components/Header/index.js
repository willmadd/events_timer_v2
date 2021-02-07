import React from 'react';
import { Link, NavLink } from "react-router-dom";
import RouteID from '../../routes/routeID';
const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                    <NavLink exact to={RouteID.home}>{'Events Countdown'}</NavLink>
                    </li>
                    <li>
                        Tour
                    </li>
                    <li>
                        Gallery
                    </li>
                    <li>
                        Get Pro
                    </li>
                    <li>
                        Support
                    </li>
                    <li>
                    <NavLink exact to={RouteID.signin}>{'Sign In'}</NavLink>
                    </li>
                    <li>
                        My Account
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;