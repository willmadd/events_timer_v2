import React from "react";
import "./planSelector.scss";

const PlansSelector = ({
    plans,
    setSelectedPlan,
    selectedPlan,
    buttonLabel,
}) => {
    // console.log('SELECTED', selectedPlan);
    return (
        <>
            {plans.map((plan) => (
                <div className="plans__grid-container">

                <div
                    key={plan.slug}
                    onClick={() => setSelectedPlan(plan.slug)}
                    className={`plans__individual ${
                        selectedPlan === plan.slug
                        ? "active"
                        : selectedPlan
                        ? "inactive"
                        : undefined
                    }`}
                    >
                    <h3>{plan.name}</h3>
                    <p className="usp">One Month Free</p>
                    <p>{plan.description}</p>
                    <p>No minium contract, cancel anytime</p>
                        <p>{`Pay nothing for the first month, then ${plan.cost} ${plan.currency} per month, charged monthly`}</p>
                </div>
            </div>
            ))}
        </>
    );
};

export default PlansSelector;
