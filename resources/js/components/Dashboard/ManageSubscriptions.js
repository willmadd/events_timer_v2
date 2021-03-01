import React, { useState } from "react";
import PlansSelector from "../MemberSubscribe/PlansSelector";
import PopupModal from "../PopupModal";
import { Link, useHistory } from "react-router-dom";
import RouteID from "../../routes/routeID";
import { useDispatch } from "react-redux";
import { initUser } from "../../store/init/actions";

const ManageSubscriptions = ({ plans }) => {

    const history = useHistory();

    const dispatch = useDispatch();

    const [selectedPlan, setSelectedPlan] = useState();

    const [showModal, setShowModal] = useState();

    const cancelSubscription = () => {
        const token = localStorage.getItem("eventcountdown:all:userToken");
        const headers = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios.get('/api/auth/cancelsubscription', headers)
        .then(res=>{
            console.log('heard back');
            console.log(res);
            const userToken = localStorage.getItem("eventcountdown:all:userToken");
            // if inplace so if there's no user token (i.e. user is logged out) it dosn't hit the user info api point
                dispatch(initUser(userToken));


            history.push(RouteID.memberDashboard, {
                message: "You're subscription has now been cancelled.",
            });
        })
        .catch(e=>{
            console.log(e);
        })
    };

    return (
        <div>
            <h2>Manage My Subscription</h2>
            {showModal && (
                <PopupModal proceed={cancelSubscription} close={setShowModal} message="Are you sure you want to canel. Your cancellation will happen immediately. Any remaining downloads will be lost." />
            )}
            <PlansSelector
                plans={plans}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
            />
            <div
                // onClick={() => setSelectedPlan(plan.slug)}
                className={`plans__individual`}
            >
                <h3 onClick={()=>setShowModal(true)}>{"Cancel my subscription"}</h3>
            </div>
        </div>
    );
};

export default ManageSubscriptions;
