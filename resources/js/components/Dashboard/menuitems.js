import RouteID from '../../routes/routeID';

export default [
    {name:"Profile", url:RouteID.memberDashboard},
    {name:"Get EventsCountdown Pro", url:RouteID.memberSubscribe, hide:"paid"},
    {name:"Manage Subscriptions", url:RouteID.manageSubscription, hide:"free"},
    {name:"My Videos", url:RouteID.myVideos},
    {name: "Logout", url:RouteID.logout}

]