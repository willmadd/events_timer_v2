import React from 'react';
import { Link } from 'react-router-dom';
import membershipLevel from '../../helpers/getMemberShopLevel';
import RouteID from '../../routes/routeID';

const Dashboard = ({user}) => {
    return (
        <div>
            <h1>{`Welcome ${user.name}`}</h1>
            <h3>{`Membership Level ${membershipLevel(user.membership_level)}`}</h3><Link to={RouteID.getPro}>Upgrade Now</Link>
        </div>
    );
};

export default Dashboard;