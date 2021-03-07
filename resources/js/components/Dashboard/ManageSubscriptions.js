import React, { useState, useEffect } from "react";
import PlansSelector from "../MemberSubscribe/PlansSelector";
import PopupModal from "../PopupModal";
import { Link, useHistory } from "react-router-dom";
import RouteID from "../../routes/routeID";
import { useDispatch } from "react-redux";
import { initUser } from "../../store/init/actions";
import "../MemberSubscribe/index.scss";

const ManageSubscriptions = ({ plans, user }) => {
    
    const history = useHistory();
    
    const dispatch = useDispatch();
    
    const [selectedPlan, setSelectedPlan] = useState();
    
    const [showModal, setShowModal] = useState();
    
    useEffect(()=>{
        const currentPlan = plans.find(plan=>plan.name===user.membership_level);
        currentPlan && setSelectedPlan(currentPlan.slug);
    },[])

const handleSubmit = ()=>{
    if(!selectedPlan){
        console.log('this is the plan you already have)')
    }else if(selectedPlan === "cancel"){
        // cancelSubscription();
        setShowModal(true);
    }else{
        changeSubscription();
    }
}

    const cancelSubscription = () => {
        const token = localStorage.getItem("eventcountdown:all:userToken");
        const headers = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        axios
            .get("/api/auth/cancelsubscription", headers)
            .then((res) => {
                const userToken = localStorage.getItem(
                    "eventcountdown:all:userToken"
                );
                // if inplace so if there's no user token (i.e. user is logged out) it dosn't hit the user info api point
                dispatch(initUser(userToken));

                history.push(RouteID.memberDashboard, {
                    message: "You're subscription has now been cancelled.",
                });
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const changeSubscription = () => {
        const token = localStorage.getItem("eventcountdown:all:userToken");
        const headers = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const data = {
            selectedPlan,
        };
        axios
            .post("/api/auth/changesubscription", data, headers)
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div className="plans__manage">
            <h2>Manage My Subscription</h2>
            {showModal && (
                <PopupModal
                    proceed={cancelSubscription}
                    close={setShowModal}
                    message="Are you sure you want to canel. Your cancellation will happen immediately. Any remaining downloads will be lost."
                />
            )}
            <div className="plans__area">
                <p>{`Upgrade, downgrade or cancel your subscription to Events Countdown`}</p>
                {/* <p>{`With no minimum contact, you can cancel any time and to make matters better, the first month is completly free`}</p> */}
                <h3>Choose a subscription:</h3>
                <div className="plans__selector">
                    <PlansSelector
                        plans={plans}
                        selectedPlan={selectedPlan}
                        setSelectedPlan={setSelectedPlan}
                        buttonLabel={"Change"}
                    />
                    <div
                        // onClick={() => setSelectedPlan(plan.slug)}
                        className={`plans__individual cancel ${selectedPlan==='cancel'?'active':'incactive'}`}
                        onClick={() => setSelectedPlan('cancel')} >
                        <h3>Cancel my Subscription</h3>
                        {/* <button
                            type="button"
                            // onClick={() => setShowModal(true)}
                        >
                            {"Cancel my subscription"}
                        </button> */}
                    </div>
                </div>
                <button type="button" className="primary icon icon__proceed" disabled={!selectedPlan} onClick={()=>handleSubmit()}>continue</button>
            </div>
        </div>
        // </div>
    );
};

export default ManageSubscriptions;
