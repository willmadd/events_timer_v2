import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { routes } from "../routes/routes";
import Header from "../containers/Header";
import RouteFromArray from "../routes/RoutesFromArray";
import { initUser } from "../store/init/actions";
import { locale } from "../store/loading/actions";
import Footer from "./Footer";
import GuestPayment from "./GuestPayment";
import HomePage from "./HomePage";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(locale());
        const userToken = localStorage.getItem("eventcountdown:all:userToken");
        dispatch(initUser(userToken));
    }, []);

    return (
        <div className="eventsapp">
            <Header />
            <Route path="/" component={HomePage}/>
            <Switch>
            <Route path="/buy" component={HomePage}/>
                {routes.map((route, index) => (
                    <RouteFromArray
                        key={index}
                        exact={route.exact}
                        {...route}
                    />
                ))}
            </Switch>
            <Route exact path="/buy" component={GuestPayment}/>
            <Footer />
        </div>
    );
};

export default App;
