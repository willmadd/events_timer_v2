import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import {routes} from '../routes/routes';
import Header from "./Header";
import RouteFromArray from "../routes/RoutesFromArray";

const App = () => {
    return (
        <div className="eventsapp">
            <Header />
            <Switch>
                {routes.map((route, index) => (
                    <RouteFromArray key={index} exact={route.exact} {...route} />
                ))}
            </Switch>
        </div>
    );
};

export default App;