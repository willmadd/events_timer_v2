import React from "react";

const PlansSelector = ({ plans, setSelectedPlan, selectedPlan }) => {
    return (
        <div className="plans__selector">
            {plans.map((plan) => (
                <div
                key={plan.slug}
                    className={`plans__individual ${
                        selectedPlan === plan.slug ? "active" : selectedPlan ?"inactive":undefined
                    }`}
                >
                    <h3>{plan.name}</h3>
                    <p>{plan.description}</p>
                    <p>{`${plan.cost} ${plan.currency}`}</p>
                    <h4>Pay nothing for the first month</h4>
                    <p>No Minium Contract, Cancel anytime</p>
                    <button
                        type="button"
                        onClick={() => setSelectedPlan(plan.slug)}
                    >{`Sign Up to ${plan.name}`}</button>
                </div>
            ))}
        </div>
    );
};

export default PlansSelector;
