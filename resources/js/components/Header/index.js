import React, {useState} from "react";
import { Link, NavLink} from "react-router-dom";
import RouteID from "../../routes/routeID";
import PostsMenuEntry from "./PostsMenuEntry";



const Header = ({ preloadRouteComponent, loggedin }) => {


    const [open, setOpen] = useState(false);

    const logout = () => {
        let token = localStorage.getItem("eventcountdown:all:userToken");

        localStorage.removeItem("eventcountdown:all:userToken");

        return axios.get(`/api/auth/logout`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    };

    return (
        <header>
            <nav role="navigation">
                <div id="menuToggle" onClick={()=>setOpen(!open)}>
                    <input type="checkbox" checked={open}/>

                    <span></span>
                    <span></span>
                    <span></span>
<div id="menu">

                    <ul>
                        <li>
                            <Link
                                exact
                                to={RouteID.home}
                                onMouseEnter={() =>
                                    preloadRouteComponent(RouteID.home)
                                }
                                >
                                <img src="/images/logo-white.svg" alt="events countdown"/>
                            </Link>
                        </li>
                        <li>Tour</li>
                        <li>
                            <NavLink
                                exact
                                to={RouteID.about}
                                onMouseEnter={() =>
                                    preloadRouteComponent(RouteID.about)
                                }
                                >
                                {"About Us"}
                            </NavLink>
                        </li>

                        <li className="dd">
                            <PostsMenuEntry />
                        </li>
                        <li>Gallery</li>
                        <li>Get Pro</li>
                        <li>Support</li>
                        </ul>
                        <ul>
                        {!loggedin ? (
                            <>
                                <li className="primary second__link">
                                    <NavLink
                                        exact
                                        to={RouteID.signin}
                                        onMouseEnter={() =>
                                            preloadRouteComponent(
                                                RouteID.signin
                                                )
                                            }
                                            >
                                        {"Sign In"}
                                    </NavLink>
                                </li>
                                <li className="secondary second__link">
                                    <NavLink
                                        exact
                                        to={RouteID.signup}
                                        onMouseEnter={() =>
                                            preloadRouteComponent(
                                                RouteID.signup
                                                )
                                            }
                                            >
                                        {"Sign Up"}
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="primary second__link">
                                    <NavLink
                                        exact
                                        to={RouteID.memberDashboard}
                                        onMouseEnter={() =>
                                            preloadRouteComponent(
                                                RouteID.memberDashboard
                                                )
                                            }
                                            >
                                        {"My Account"}
                                    </NavLink>
                                </li>
                                <li className="secondary second__link" onClick={() => logout()}>Log Out</li>
                            </>
                        )}
                    </ul>
                        </div>
                </div>
            </nav>
    
        </header>
    );
};

export default Header;
