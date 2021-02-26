import React, {useState} from "react";
import CheckoutArea from "./CheckoutArea";
import "./index.scss";
import PlansSelector from "./PlansSelector";

const MemberSubscribe = ({ plans }) => {

const [selectedPlan, setSelectedPlan] = useState();

console.log(plans.find(plan=>plan.slug===selectedPlan));

// useEffect(()=>{
//     plans.find(plan=>plan.slug===selectedPlan)
// }, [selectedPlan])

    return (
        <div className="plans">
            <h2>Get Events Countdown Pro</h2>
           
            <div className="plans__wrapper">
                <PlansSelector plans={plans} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}/>
                {selectedPlan && <CheckoutArea selectedPlan={plans.find(plan=>plan.slug===selectedPlan)}/>}
            </div>
        </div>
    );
};

export default MemberSubscribe;
