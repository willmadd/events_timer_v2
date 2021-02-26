import React from "react";

const PlansSelector = ({ plans, setSelectedPlan, selectedPlan }) => {
    return (
        <div className="plans__area">
             <p>{`If you're running online or in person events regularly then it works out much more cost effective to purchase an Events Countdown subscription. The first month is on us, so if you don't like our service, you can cancel within the first month and yu won't be charged at all.`}</p>
            <p>{`With no minimum contact, you can cancel any time and to make matters better, the first month is completly free`}</p>
            <h3>Choose a subscription:</h3>
        <div className="plans__selector">

            {plans.map((plan) => (
                <div
                key={plan.slug}
                onClick={() => setSelectedPlan(plan.slug)}
                className={`plans__individual ${
                    selectedPlan === plan.slug ? "active" : selectedPlan ?"inactive":undefined
                }`}
                >
                    <h3>{plan.name}</h3>
                    <p>{plan.description}</p>
                    <h4>{`Pay nothing for the first month, then ${plan.cost} ${plan.currency} per month, charged monthly`}</h4>
                    <p>No minium contract, cancel anytime</p>
                    <button
                        type="button"
                        onClick={() => setSelectedPlan(plan.slug)}
                        >{`Sign Up to ${plan.name}`}</button>
                </div>
            ))}
        </div>
            </div>
    );
};

export default PlansSelector;
