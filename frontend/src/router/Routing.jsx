import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Spinner from '../component/common/spinner/Spinner';

const Home = lazy(() => import('../pages/Home'));
const Pricing = lazy(() => import('../pages/Pricing'));
const Contact = lazy(() => import('../pages/Contact'));
const Services = lazy(() => import('../pages/Services'));
const Faq = lazy(() => import('../pages/FAQ'));
// const About = lazy(() => import('../pages/About'));
const NotFound = lazy(() => import('../pages/NotFound'));


const Routing = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/pricing">
                        <Pricing />
                    </Route>
                    <Route  path="/service">
                        <Services />
                    </Route>
                    <Route path="/faq">
                        <Faq></Faq>
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </Suspense>
    )
}

export default Routing;
