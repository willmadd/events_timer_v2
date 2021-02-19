import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../store/reducers";
import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import SiteLoading from "./SiteLoading";
// const initialState = {
//     test:'test'
// }

const stripePromise = loadStripe(
    "pk_test_51IJag6LrsmQqsvaawht9s51amhFcbQVvWsSmBf1Zsy4yKcG5w0ztf8eIVufboJcIvAjaGIg4K0c7rBOExUKPjZoq003c5A3tLF"
);

const store = createStore(
    rootReducer,
    // initialState,
    compose(
        applyMiddleware(thunk),
        // window.__REDUX_DEVTOOLS_EXTENSION__ &&
        //     window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

if (document.getElementById("events")) {
    ReactDOM.render(
        // <React.StrictMode>
        <React.Suspense fallback={<SiteLoading />}>
            <Provider store={store}>
                <Router>
                    <Elements stripe={stripePromise}>
                        <App />
                    </Elements>
                </Router>
            </Provider>
        </React.Suspense>,
        // </React.StrictMode>,
        document.getElementById("events")
    );
}
