import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import RouteID from "../../routes/routeID";
import { useDispatch } from "react-redux";

const LogOut = () => {
    const history = useHistory();

    const dispatch = useDispatch();

    const logout=()=>{
        let token = localStorage.getItem("eventcountdown:all:userToken");
        localStorage.removeItem("eventcountdown:all:userToken");
        return axios
            .get(`/api/auth/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                dispatch({type:'LOGOUT'})
                history.push(RouteID.home);
            });
    }

    useEffect(() => {
        logout();
    }, []);
    return <div>Logging out.....</div>;
};

export default LogOut;
