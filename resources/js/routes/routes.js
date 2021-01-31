import React from 'react';
import {ReactLazyPreload} from './helpers';
import RouteID from '../routes/routeID';

const HomePage = ReactLazyPreload(() =>
import("../components/HomePage")
);



export const routes = [
    {path: RouteID.home, exact:true, component: HomePage},
];