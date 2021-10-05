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
const ServiceCategoryDetails = lazy(() => import('../pages/CategoryDetails'));
const Faq = lazy(() => import('../pages/FAQ'));
const About = lazy(() => import('../pages/About'));
const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));
const SingleCourierDetail = lazy(() => import('../components/service/sub-components/SingleCourierDetail'));
const CategoryDetails = lazy(() => import('../pages/CategoryDetails'));
const CompanyForm = lazy(() => import('../pages/CompanyForm'));

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
                    <Route exact path="/new-company/register-form">
                        <CompanyForm />
                    </Route>
                    <Route exact path="/service/category">
                        <CategoryDetails />
                    </Route>
                    <Route exact path="/service/category/:_id">
                        <SingleCourierDetail />
                    </Route>
                    <Route path="/service">
                        <Services />
                    </Route>
                    <Route path="/service/category/mobileandaccessories">
                        <ServiceCategoryDetails />
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
