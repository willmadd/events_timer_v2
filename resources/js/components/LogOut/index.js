import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import routeID from "../../routes/routeID";

const LogOut = () => {
    const history = useHistory();

    useEffect(() => {
        let token = localStorage.getItem("trailshub:all:userToken");
        localStorage.removeItem("trailshub:all:userToken");
        return axios
            .get(`/api/auth/logout`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                history.push(routeID.home);
            });
    }, []);
    return <div>Logging out...</div>;
};

export default LogOut;
