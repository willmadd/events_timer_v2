import React from "react";
import { withStripe } from "../../helpers/withStripe";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutArea = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = () => {
        console.log('llll');
        const cardElement = elements.getElement(CardElement);
    }

const getOneMonthForward=()=>{
    let newDate = new Date();
    var day = newDate.getDate();
    newDate.setMonth(newDate.getMonth() + +1);
    if (newDate.getDate() != day)
        newDate.setDate(0);
    return newDate;
}


    return (
        <div>
            <h3>Checkout Area</h3>
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
            <button
                type="button"
                onClick={() => handleSubmit()}
                disabled={!stripe}
            >
                Pay
            </button>
            <div className="checkout__info">
                <p>{`Cancel at any time`}</p>
                <p>Your first payment will happen on <b>{getOneMonthForward().toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })}</b> unless you cancel before hand</p>
                <p>Payments are handled by Stripe and card details are never stored on Events Countdown's servers</p>
            </div>
        </div>
    );
};

export default withStripe(CheckoutArea);
