import React, { useState } from "react";
import { connect } from "react-redux";
import { withStripe } from "../../helpers/withStripe";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./editPaymentDetails.scss";
import Loading from "../Loader";

const EditPaymentDetails = ({ user, setPath }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        if (!stripe || !elements) {
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
                .post("/api/auth/updatepaymentmethod", { id }, headers)
                .then((res) => {
                    console.log(res);
                    setLoading("complete");
                    // history.push(RouteID.memberDashboard)
                })
                .catch((error) => {
                    setLoading(false);
                    setError(error.response.data.message)
                });
        }
    };

    return (
        <div className="update-payment">
            <h3>Update subscription payment card</h3>
            <p>
                If you've signed up to out payment subscriptions service, then
                you can update the card payment details here. If you update your
                payment method, there will be no change to your billing date
            </p>
            <p className="sub">
                To ensure we're GDPR compliant, no card details are stored on
                EventsCountdown's servers. All payments are handled by{" "}
                <a href="https://stripe.com/gb">Stripe</a>
            </p>
            {loading === "complete" ?<p>Your Paymend details have been updated!</p>: loading? (
                <Loading />
                ) : (
                    <>
                    <h4>Enter new payment card details below:</h4>
                    <div className="card__element">
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
                    </div>
                        {error && <p className="error">An error occured and you're change could not be processed. Reason: {error}</p>}
                    <div className="button__container">
                        <button
                            className="secondary icon icon__close"
                            type="button"
                            onClick={() => setPath(null)}
                        >
                            Cancel
                        </button>

                        <button
                            className="primary icon icon__proceed"
                            type="button"
                            onClick={() => handleSubmit()}
                            disabled={!stripe}
                        >
                            Update
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(withStripe(EditPaymentDetails));
