import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const GuestPayment = ({setDisplayPaymentModal}) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: cardElement,
        });

        if (error) {
            console.log("[error]", error);
        } else {
            console.log("[PaymentMethod]", paymentMethod);
        }
    };

    return (
        <div className="guest__payment__overlay" onClick={()=>setDisplayPaymentModal(false)}>
            <div className="guest__payment__modal">
                <h2>Guest Payment!</h2>
                <div className="guest__payment__card">
                    <form onSubmit={handleSubmit}>
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: "16px",
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
                        <button type="submit" disabled={!stripe}>
                            Pay
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GuestPayment;
