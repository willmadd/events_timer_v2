import React, { useState } from "react";
import { withStripe } from "../../helpers/withStripe";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Loading from "../Loader";
import { Link, useHistory } from "react-router-dom";
import RouteID from "../../routes/routeID";

const CheckoutArea = ({ selectedPlan }) => {

    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {


        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            console.log("[error]", error);
        } else {
            setLoading(true);
            const { id } = paymentMethod;
            const token = localStorage.getItem("eventcountdown:all:userToken");
            const headers = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            axios
                .post(
                    "/api/auth/subscribe",
                    { id, plan: selectedPlan.stripe_plan },
                    headers
                )
                .then((res) => {
                    setLoading(false);
                    history.push(RouteID.memberDashboard)
                })
                .catch((e) => {
                    setLoading(false);
                    setError("A server error occured, Please try again");
                    console.log(e);
                });
        }
    };

    const getOneMonthForward = () => {
        let newDate = new Date();
        var day = newDate.getDate();
        newDate.setMonth(newDate.getMonth() + +1);
        if (newDate.getDate() != day) newDate.setDate(0);
        return newDate;
    };

    return (
        <div className="plans__checkout">
            <h3>Checkout</h3>
            <div className="plans__checkout__summary">
                <p>
                    You are purchasing 1 x {selectedPlan.name} subscription to
                    EventsCountdown.com
                </p>
                <p>{`Cancel at any time`}</p>
                <p>Charge today: 0</p>
                <p>
                    {`Your first payment of ${selectedPlan.cost} ${selectedPlan.currency} will happen on `}
                    <b>
                        {getOneMonthForward().toLocaleDateString("en-GB", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                        })}
                    </b>{" "}
                    unless you cancel beforehand
                </p>
            </div>
            {error && <p className="error">{error}</p>}
            {loading ? (
                <Loading />
            ) : (
                <>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: "16px",
                                    border: "1px solid #333333",
                                    marginBottom: "24px",
                                    color: "#424770",
                                    "::placeholder": {
                                        color: "#aab7c4",
                                    },
                                },
                                invalid: {
                                    color: "#9e2146",
                                },
                            },
                        }}
                    />
                    <button
                        type="button"
                        onClick={() => handleSubmit()}
                        disabled={!stripe}
                    >
                        Sign Up
                    </button>
                </>
            )}
            <div className="checkout__info">
                <p>
                    Payments are handled by Stripe and card details are never
                    stored on Events Countdown's servers
                </p>
            </div>
        </div>
    );
};

export default withStripe(CheckoutArea);
