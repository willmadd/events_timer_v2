import React, { useEffect, useLayoutEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { ReactLazyPreload } from "../../routes/helpers";
import RouteID from "../../routes/routeID";
import Loading from "../Loader";
import LogOut from "../LogOut";
import Menu from "./Menu";
import img from './img/header.jpg'
import MyVideos from "./MyVideos";

import axios from "axios";

const Dashboard = (props) => {

    const history = useHistory();

    const DashboardMain = ReactLazyPreload(() => import("./Dashboard"));

    const MemberSubscribe = ReactLazyPreload(() => import("../MemberSubscribe"));



    useLayoutEffect(() => {
        if (!props.user.loading && props.user.error) {
            history.push(RouteID.signup);
        }
    }, [props.user]);

    useLayoutEffect(() => {
        axios.get('/api/plansbycurrency/gbp').then(res=>{
            console.log('plans');
            console.log(res.data)
        })
    }, []);

    if (props.user.loading) {
        return <Loading />;
    } else {
        return (
            <div className="dashboard">
                <img src={img}/>
                <div className="dashboard__wrapper">

       
                    <Menu />
      
                <main>
                    <Route exact path={RouteID.memberDashboard}>
                        <DashboardMain user={props.user} />
                    </Route>
                        <Route exact path={RouteID.myVideos}>
                            <MyVideos user={props.user}/>
                        </Route>
                    <Route exact path={RouteID.memberSubscribe}>
                         <MemberSubscribe />
                    </Route>
                    <Route exact path={RouteID.logout} component={LogOut} />
                </main>
            </div>
                </div>
        );
    }
};

export default Dashboard;
