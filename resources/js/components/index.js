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

import SiteLoading from "./SiteLoading";
// const initialState = {
//     test:'test'
// }



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
                        <App />
                </Router>
            </Provider>
        </React.Suspense>,
        // </React.StrictMode>,
        document.getElementById("events")

    );
}
