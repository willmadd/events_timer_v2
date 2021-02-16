import React from 'react';
import { Link, NavLink } from "react-router-dom";
import RouteID from '../../routes/routeID';
import PostsMenuEntry from './PostsMenuEntry';
const Header = ({loggedin}) => {

    
    const logout = () =>{

        let token = localStorage.getItem("eventcountdown:all:userToken");
        
        localStorage.removeItem("eventcountdown:all:userToken");
        
        return axios.get(`/api/auth/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

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
                    <li className="dd">
                        <PostsMenuEntry />
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
                    {!loggedin?<>
                    <li>
                    <NavLink exact to={RouteID.signin}>{'Sign In'}</NavLink>
                    </li>
                    <li>
                    <NavLink exact to={RouteID.signup}>{'Sign Up'}</NavLink>
                    </li>
                    </>:<>
                    <li>
                        My Account
                    </li>
                    <li onClick={()=>logout()}>
                        Log Out
                    </li>
                    </>}
                </ul>
            </nav>
        </header>
    );
};

export default Header;