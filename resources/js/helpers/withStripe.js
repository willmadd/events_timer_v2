import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
    "pk_test_51IJag6LrsmQqsvaawht9s51amhFcbQVvWsSmBf1Zsy4yKcG5w0ztf8eIVufboJcIvAjaGIg4K0c7rBOExUKPjZoq003c5A3tLF"
);

export function withStripe(OriginalReactComponent) {
    return class extends React.Component {
        render() {
          return <Elements stripe={stripePromise}><OriginalReactComponent {...this.props} /></Elements>
       }
    }
 } 