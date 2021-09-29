import React, { Suspense, lazy } from 'react';
import Spinner from '../helper/Spinner';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import UserList from '../components/dashboard/wrapper/UserList';

const Home = lazy(() => import('../pages/Home'));
const Pricing = lazy(() => import('../pages/Pricing'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Services = lazy(() => import('../pages/Services'));
const Faq = lazy(() => import('../pages/FAQ'));
const About = lazy(() => import('../pages/About'));
const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));
const MyAccount = lazy(() => import('../components/dashboard/wrapper/settings/MyAccount'));

const Routes = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/contact">
                        <Contacts />
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
                    <Route path="/my-account">
                        <MyAccount />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/userlist">
                        <UserList />
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
