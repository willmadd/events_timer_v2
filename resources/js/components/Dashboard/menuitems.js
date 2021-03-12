import RouteID from '../../routes/routeID';


export default [
    {name:"Profile", url:RouteID.memberDashboard},
    {name:"Get EventsCountdown Pro", url:RouteID.memberSubscribe, show:"free"},
    {name:"Manage Subscriptions", url:RouteID.manageSubscription, show:"paid"},
    {name:"My Videos", url:RouteID.myVideos},
    {name:"Edit Details", url:RouteID.editDetails},
    {name: "Logout", url:RouteID.logout}

]