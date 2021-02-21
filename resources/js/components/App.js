import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { routes } from "../routes/routes";
import { modalRoutes } from "../routes/routes";
import Header from "../containers/Header";
import RouteFromArray, { ModalRouteFromArray } from "../routes/RoutesFromArray";
import { initUser } from "../store/init/actions";
import { locale } from "../store/loading/actions";
import Footer from "./Footer";
import { preloadRouteComponent } from "../routes/helpers";
// import GuestPayment from "./GuestPayment";
import routeID from "../routes/routeID";
import { ReactLazyPreload } from "../routes/helpers";
import Meta from "./Meta";

// import GuestPayment from "./GuestPayment";

const GuestPayment = ReactLazyPreload(() =>
    import("../components/GuestPayment")
);

const App = () => {
    const dispatch = useDispatch();

    let location = useLocation();

    useEffect(() => {
        dispatch(locale());
        const userToken = localStorage.getItem("eventcountdown:all:userToken");
        // if inplace so if there's no user token (i.e. user is logged out) it dosn't hit the user info api point
        console.log('logggeddd on');
        console.log(userToken);
        if(userToken){
            dispatch(initUser(userToken));
        }
    }, []);

    let background = location.state && location.state.background;

    return (
        <div className="eventsapp">
            <Meta />
            <Header preloadRouteComponent={preloadRouteComponent} />
            <Switch location={background || location}>
                {routes.map((route, index) => (
                    <RouteFromArray
                        key={index}
                        exact={route.exact}
                        {...route}
                    />
                ))}
            </Switch>
            {modalRoutes.map(
                (modalRoute, index) =>
                    background && (
                        <ModalRouteFromArray
                            key={`${index}-modal`}
                            exact={modalRoute.exact}
                            {...modalRoute}
                        />
                    )
            )}
            <Footer />
        </div>
    );
};

export default App;
