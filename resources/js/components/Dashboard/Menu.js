import React from "react";
import { Link, NavLink } from "react-router-dom";
import menuItems from "./menuitems";
import { preloadRouteComponent } from "../../routes/helpers";
import "./menu.scss";
import { slugify } from "../../helpers/slugify";
const Menu = ({ membership }) => {
    console.log('MEMBERSHIP',membership)
    return (
        <nav className="member mob-hide">
            <ul>
                {/* {menuItems.map((menuItem) => {
                    return (
                        <li key={menuItem.name}>
                            <NavLink
                                className={slugify(menuItem.name)}
                                exact
                                to={menuItem.url}
                                onMouseOver={() =>
                                    preloadRouteComponent(menuItem.url)
                                }
                            >
                                {menuItem.name}
                            </NavLink>
                        </li>
                    );
                })} */}
                {menuItems.reduce((acc,menuItem, i)=>{
                        // if (membership && membership.toLowerCase() !== menuItem.hide || !menuItem.show) {
                            if (!menuItem.show || (menuItem.show === 'free' && membership && membership.toLowerCase()==="free")||(menuItem.show!=="free" && membership && membership.toLowerCase()!=="free" ) ) {
                            acc.push(<li key={menuItem.name}>
                                <NavLink
                                    className={slugify(menuItem.name)}
                                    exact
                                    to={menuItem.url}
                                    onMouseOver={() =>
                                        preloadRouteComponent(menuItem.url)
                                    }
                                >
                                    {menuItem.name}
                                </NavLink>
                            </li>);
                        }
                        return acc;
                    // return <p>Hello!</p>
                },[])}
            </ul>
        </nav>
    );
};

export default Menu;
