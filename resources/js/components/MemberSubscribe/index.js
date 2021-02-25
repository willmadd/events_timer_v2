import React, {useState} from "react";
import CheckoutArea from "./CheckoutArea";
import "./index.scss";
import PlansSelector from "./PlansSelector";

const MemberSubscribe = ({ plans }) => {

const [selectedPlan, setSelectedPlan] = useState(null);

    return (
        <div className="plans">
            <h2>Get Events Countdown Pro</h2>
            <p>{`Sign up and get great value downloadabl evideos for your webinar or online event.`}</p>
            <p>{`Get the first month free, and you can cancel any time, there's no risk at all!`}</p>
            <div className="plans__wrapper">
                <PlansSelector plans={plans} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>
                <CheckoutArea />
            </div>
        </div>
    );
};

export default MemberSubscribe;
