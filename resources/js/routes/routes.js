import React from 'react';
import {ReactLazyPreload} from './helpers';
import RouteID from '../routes/routeID';

const HomePage = ReactLazyPreload(() =>
import("../components/HomePage")
);

const SignInPage = ReactLazyPreload(() =>
import("../components/SignInPage")
);

const SignUpPage = ReactLazyPreload(() =>
import("../components/SignUpPage")
);

const SignUpSuccess = ReactLazyPreload(() =>
import("../components/SignUpSuccess")
);



export const routes = [
    {path: RouteID.home, exact:true, component: HomePage},
    {path: RouteID.signin, exact:true, component: SignInPage},
    {path: RouteID.signup, exact:true, component: SignUpPage},
    {path: RouteID.signupsuccess, exact:true, component: SignUpSuccess},
];