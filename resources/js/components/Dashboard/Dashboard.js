import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import RouteID from '../../routes/routeID';

const Dashboard = (props) => {
    const {user} = props;
    let location = useLocation();
    // console.log(location.state.message);
    return (
        <>
            <h1>{`Welcome ${user.name}`}</h1>
            <div className="dashboard__statistics">
                {location.state && location.state.message&&<p className="error">{location.state.message}</p>}
                <div className="dashboard__title">
                    <p>{`Membership Level:`}</p>
                    <p className="dashboard__action">{`${user.membership_level}`}</p>
                </div>
                <div>
                    <p>{`Downloads remaining this month:`}</p>
                    <p className="dashboard__action">{`${user.downloads_remaining}`}</p>
                </div>
            </div>

            {user.membership_level.toLowerCase()==="free"?<Link className={'primary'} to={RouteID.getPro}>Upgrade Now</Link>:<Link className={'primary'} to={RouteID.manageSubscription} >Manage my subscription</Link>}
        </>
    );
};

export default Dashboard;