import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from '../store/reducers';
import App from './App';
import { Provider } from "react-redux";


const store = createStore(
    rootReducer,
    // initalState,
    compose(
        // applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

if (document.getElementById('events')) {
    ReactDOM.render(        // <React.StrictMode>
        <React.Suspense fallback={"Loading"}>
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </React.Suspense>,
    // </React.StrictMode>,
     document.getElementById('events'));
}
