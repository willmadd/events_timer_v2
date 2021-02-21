import React from "react";
import { Link, NavLink } from "react-router-dom";
import menuItems from "./menuitems";
import { preloadRouteComponent } from "../../routes/helpers";
import "./menu.scss";
const Menu = () => {
    return (
        <nav className="member">
            <ul>
                {menuItems.map((menuItem) => {
                    return (
                        <li key={menuItem.name}>
                            <NavLink
                                exact
                                to={menuItem.url}
                                onMouseOver={() =>
                                    preloadRouteComponent(menuItem.url)
                                }
                            >
                                <h5>{menuItem.name}</h5>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Menu;
