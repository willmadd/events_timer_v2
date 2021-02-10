import React, { useEffect, useLayoutEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { ReactLazyPreload } from "../../routes/helpers";
import routeID from "../../routes/routeID";
import LogOut from "../LogOut";
import Menu from './Menu';

const DashboardMain = ReactLazyPreload(() => import("./Dashboard"));

const Dashboard = (props) => {
    const history = useHistory();
    useLayoutEffect(() => {
        if (!props.user.loading && props.user.error) {
            history.push(routeID.signUp);
        }
    }, [props.user]);

    return (
        <div className="account-dashboard">
            <nav>
                <Menu />
            </nav>
            <main>
                <Route exact path={"/dashboard"}>
                    <DashboardMain user={props.user} />
                </Route>
                <Route exact path={routeID.logout} component={LogOut} />
            </main>
        </div>
    );
};

export default Dashboard;
