import React, { Suspense, lazy } from 'react';
import Spinner from '../helper/Spinner';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Private from '../components/auth/PrivateRoute';
const Home = lazy(() => import('../pages/Home'));
const Pricing = lazy(() => import('../pages/Pricing'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Services = lazy(() => import('../pages/Services'));
const CategoryDetail = lazy(() => import('../pages/ServiceDetails'));
const Faq = lazy(() => import('../pages/FAQ'));
const About = lazy(() => import('../pages/About'));
const SignUp = lazy(() => import('../pages/SignUp'));
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
                    <Route path="/contact">
                        <Contacts />
                    </Route>
                    <Route exact path="/service/category">
                        <CategoryDetail />
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
                    <Route path="/signup">
                        <SignUp />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Private path="/dashboard">
                        <Dashboard />
                    </Private>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </Suspense>

    )
}

export default Routes;
