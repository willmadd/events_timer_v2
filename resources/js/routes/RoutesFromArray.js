import React from "react";
import { Route } from "react-router-dom";

const RouteFromArray = (route) => {
    return (
        <Route
            path={route.path}
            render={props => <route.component {...props} routes={route.routes} />}
        />
    );
};
export default RouteFromArray;


export const ModalRouteFromArray = (route) => {
    return (
        <Route
            path={route.path}
            render={props => <route.children {...props} routes={route.routes} />}
        />
    );
};