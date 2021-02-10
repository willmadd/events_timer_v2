import React from "react";
import { Link, NavLink } from "react-router-dom";
import menuItems from "./menuitems";
import {preloadRouteComponent} from '../../routes/helpers'
const Menu = () => {
    return (
        <ul>
            {menuItems.map(menuItem => {
                return <li key={menuItem.name}>
                    <NavLink exact to={menuItem.url} onMouseOver={()=>preloadRouteComponent(menuItem.url)}><h5>{menuItem.name}</h5></NavLink>
                </li>;
            })}
        </ul>
    );
};

export default Menu;
