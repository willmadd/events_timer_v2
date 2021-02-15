import React, { useEffect, useLayoutEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { ReactLazyPreload } from "../../routes/helpers";
import routeID from "../../routes/routeID";
import Loading from "../Loader";
import LogOut from "../LogOut";
import Menu from "./Menu";
import img from './img/header.jpg'

const Dashboard = (props) => {

    const history = useHistory();

    const DashboardMain = ReactLazyPreload(() => import("./Dashboard"));


    useLayoutEffect(() => {
        if (!props.user.loading && props.user.error) {
            history.push(routeID.signup);
        }
    }, [props.user]);

    if (props.user.loading) {
        return <Loading />;
    } else {
        return (
            <div className="dashboard">
                <img src={img}/>
                <div className="dashboard__wrapper">

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
                </div>
        );
    }
};

export default Dashboard;
