import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { routes } from "../routes/routes";
import Header from "../containers/Header";
import RouteFromArray from "../routes/RoutesFromArray";
import { initUser } from "../store/init/actions";
import { locale } from "../store/loading/actions";
import {preloadRouteComponent} from '../routes/helpers';
const App = () => {
    const dispatch = useDispatch();
// console.log(preloadRouteComponent);
    useEffect(() => {
        dispatch(locale());
        const userToken = localStorage.getItem("eventcountdown:all:userToken");
        dispatch(initUser(userToken));
    }, []);

    return (
        <div className="eventsapp">
            <Header preloadRouteComponent={preloadRouteComponent}/>
            <Switch>
                {routes.map((route, index) => (
                    <RouteFromArray
                        key={index}
                        exact={route.exact}
                        {...route}
                    />
                ))}
            </Switch>
        </div>
    );
};

export default App;
