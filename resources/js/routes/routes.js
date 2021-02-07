import React from 'react';
import {ReactLazyPreload} from './helpers';
import RouteID from '../routes/routeID';

const HomePage = ReactLazyPreload(() =>
import("../components/HomePage")
);

const SignInPage = ReactLazyPreload(() =>
import("../components/SignInPage")
);



export const routes = [
    {path: RouteID.home, exact:true, component: HomePage},
    {path: RouteID.signin, exact:true, component: SignInPage},
];