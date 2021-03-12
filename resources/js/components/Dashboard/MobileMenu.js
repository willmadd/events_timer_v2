import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import menuItems from "./menuitems";
import { preloadRouteComponent } from "../../routes/helpers";
import "./menu.scss";
import { slugify } from "../../helpers/slugify";
import {
    useLocation
  } from "react-router-dom";

const MobileMenu = (props) => {
    const [open, setOpen] = useState(false);
    let location = useLocation();
    console.log(location);

    const path = location.pathname.split('/');

    const title = path[path.length-1]

    return (
        <nav className="menu__mobile member desktop-hide">
            <div className={`menu__mobile__title ${open?'active':'inactive'}`} onClick={()=>setOpen(!open)}>
                <h3>{title}</h3>
            </div>
            {open &&
            <ul>
                {menuItems.map((menuItem) => {
                    return (
                        <li key={menuItem.name}>
                            <NavLink
                            onClick={()=>setOpen(false)}
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
                })}
            </ul>}
        </nav>
    );
};

export default MobileMenu;
