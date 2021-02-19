import React from "react";
import { matchPath } from "react-router-dom";
import { routes } from "../routes/routes";


export const preloadRouteComponent = (path) => {
    const component = findComponentForRoute(path, routes);
    if (component && component.preload) {
        component.preload();
    }
};

const findComponentForRoute = (path, routes) => {
    const matchingRoute = routes.find((route) =>
        matchPath(path, {
            path: route.path,
            exact: route.exact,
        })
    );
    return matchingRoute ? matchingRoute.component : null;
};


export const xyz = () =>{
    console.log('hello')
    return 'hello';
}