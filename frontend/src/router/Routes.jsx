import React, { Suspense, lazy } from 'react';
import Spinner from '../helper/Spinner';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const Home = lazy(() => import('../pages/Home'));
const Pricing = lazy(() => import('../pages/Pricing'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Services = lazy(() => import('../pages/Services'));
const Faq = lazy(() => import('../pages/FAQ'));
const About = lazy(() => import('../pages/About'));
const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Routes = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/pricing">
                        <Pricing />
                    </Route>
                    <Route path="/pricing">
                        <Pricing />
                    </Route>
                    <Route path="/service">
                        <Services />
                    </Route>
                    <Route path="/faq">
                        <Faq></Faq>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </Suspense>

    )
}

export default Routes;
