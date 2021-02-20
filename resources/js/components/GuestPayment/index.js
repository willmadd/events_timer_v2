import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import routeID from "../../routes/routeID";
import { Link } from "react-router-dom";
import { withStripe } from "../../helpers/withStripe";


const GuestPayment = ({userCurrency, amount}) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // Block native form submission.
        // event.preventDefault();
        console.log('submit hit');

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
            const {id} = paymentMethod;
            console.log(id);
            axios.post('/api/charge', {id, userCurrency, amount})
            .then(res=>{
                console.log(res)
            })
            .catch(e=>{
                console.log(e)
            })
        }
    };

    return (
        <div className="guest__payment__overlay" 
        // onClick={()=>setDisplayPaymentModal(false)}
        >
            <div className="guest__payment__modal">
                <h2>Guest Payment!</h2>
                <div className="guest__payment__card">
                    <h4>{`Charge for ${amount} ${userCurrency}`}</h4>
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
                        <button type="button" onClick={()=>handleSubmit()} disabled={!stripe}>
                            Pay
                        </button>
                    </form>
                </div>
                <Link to={routeID.home}>Back</Link>
            </div>
        </div>
    );
};

export default withStripe(GuestPayment);
