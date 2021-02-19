import React from 'react';

import RouteID from './routeID';

import  {ReactLazyPreload}  from './things';




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

const SignUpActivate = ReactLazyPreload(() =>
import("../components/SignUpActivate")
);

// const LogOut = ReactLazyPreload(() =>
// import("../components/Logout")
// );

const Dashboard = ReactLazyPreload(() =>
import("../containers/Dashboard")
);

const GuidesPage = ReactLazyPreload(() =>
import("../components/GuidesPage")
);

const Test = ReactLazyPreload(() =>
import("../components/Test")
);



export const routes = [
    // {path: 'signup/activate/:token', exact:true, component: Test},
    {path: RouteID.home, exact:true, component: HomePage},
    {path: RouteID.signin, exact:true, component: SignInPage},
    {path: RouteID.signup, exact:true, component: SignUpPage},
    {path: RouteID.signupsuccess, exact:true, component: SignUpSuccess},
    {path: RouteID.signupActivate, exact:true, component: SignUpActivate},
    // {path: RouteID.logout, exact:true, component: LogOut},
    {path: RouteID.guides, exact:true, component: GuidesPage},
    // {path: RouteID.dashboard, exact:true, component: Dashboard},
];