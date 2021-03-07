import React, {useState} from "react";
import CheckoutArea from "./CheckoutArea";
import "./index.scss";
import PlansSelector from "./PlansSelector";

const MemberSubscribe = ({ plans }) => {

const [selectedPlan, setSelectedPlan] = useState();

    return (
        <div className="plans">
            <h2>Get Events Countdown Pro</h2>
            <p>{`If you're running online or in person events regularly then it works out much more cost effective to purchase an Events Countdown subscription.`}</p><p> {`The first month is on us, so if you don't like our service, you can cancel within the first month and you won't be charged at all.`}</p>
            <div className="plans__wrapper">
                <PlansSelector plans={plans} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} buttonLabel={'Sign up to'}/>
                {selectedPlan && <CheckoutArea setSelectedPlan={setSelectedPlan}  selectedPlan={plans.find(plan=>plan.slug===selectedPlan)}/>}
            </div>
        </div>
    );
};

export default MemberSubscribe;
