import React, { useEffect, useLayoutEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { ReactLazyPreload } from "../../routes/helpers";
import RouteID from "../../routes/routeID";
import Loading from "../Loader";
import LogOut from "../LogOut";
import Menu from "./Menu";
import img from "./img/header.jpg";
import MyVideos from "./MyVideos";

import axios from "axios";
import ManageSubscriptions from "./ManageSubscriptions";

const Dashboard = (props) => {
    const history = useHistory();

    const DashboardMain = ReactLazyPreload(() => import("./Dashboard"));

    const MemberSubscribe = ReactLazyPreload(() =>
        import("../MemberSubscribe")
    );
    const [plans, setPlans] = useState([]);

    useLayoutEffect(() => {
        if (!props.user.loading && props.user.error) {
            history.push(RouteID.signup);
        }
    }, [props.user]);

    useLayoutEffect(() => {
        axios
            .get("/api/plansbycurrency/gbp")
            .then((res) => {
                setPlans(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    console.log('index', plans);

    if (props.user.loading) {
        return <Loading />;
    } else {
        return (
            <div className="dashboard">
                <img src={img} />
                <div className="dashboard__wrapper">
                    <Menu membership={props.user.membership_level}/>

                    <main>
                        <Route exact path={RouteID.memberDashboard}>
                            <DashboardMain user={props.user} />
                        </Route>
                        <Route exact path={RouteID.myVideos}>
                            <MyVideos user={props.user} />
                        </Route>
                        <Route exact path={RouteID.memberSubscribe}>
                            <MemberSubscribe plans={plans} />
                        </Route>
                        <Route exact path={RouteID.manageSubscription}>
                            <ManageSubscriptions plans={plans} user={props.user}/>
                            {/* <MemberSubscribe /> */}
                        </Route>
                        <Route exact path={RouteID.logout} component={LogOut} />
                    </main>
                </div>
            </div>
        );
    }
};

export default Dashboard;
