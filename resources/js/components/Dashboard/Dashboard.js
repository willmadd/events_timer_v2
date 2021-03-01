import React from 'react';
import { Link } from 'react-router-dom';
import RouteID from '../../routes/routeID';

const Dashboard = (props) => {
    const {user} = props;
    console.log(props);
    return (
        <div>
            <h1>{`Welcome ${user.name}`}</h1>
            <h3>{`Membership Level ${user.membership_level}`}</h3>
            {user.membership_level==="free"?<Link to={RouteID.getPro}>Upgrade Now</Link>:<Link to={RouteID.manageSubscription} >Manage my subscription</Link>}
        </div>
    );
};

export default Dashboard;