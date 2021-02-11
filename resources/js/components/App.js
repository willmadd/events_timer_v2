import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { routes } from "../routes/routes";
import Header from "./Header";
import RouteFromArray from "../routes/RoutesFromArray";
import {initUser} from '../store/init/actions';
import {locale} from '../store/loading/actions';

const App = () => {

const dispatch = useDispatch();

    useEffect(() => {
        dispatch(locale());
        const userToken = localStorage.getItem("eventcountdown:all:userToken");
        if (userToken) {
            dispatch(initUser(userToken));
        }
    }, []);

    return (
        <div className="eventsapp">
            <Header />
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
