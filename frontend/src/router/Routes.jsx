import React, { Suspense, lazy } from 'react';
import Spinner from '../helper/Spinner';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Private from '../components/auth/PrivateRoute';
import PrivateForm from '../components/auth/PrivateForm';
const ShippingForm =  lazy(() => import('../pages/ShippingForm'));
const Home = lazy(() => import('../pages/Home'));
const CompanyForm = lazy(() => import('../pages/CompanyForm'));
const Pricing = lazy(() => import('../pages/Pricing'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Services = lazy(() => import('../pages/Services'));
const CategoryDetail = lazy(() => import('../pages/ServiceDetails'));
const SingleCourierDetail = lazy(() => import('../pages/SingleCourier'));
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
                    <PrivateForm exact path="/new-company/register-form">
                        <CompanyForm />
                    </PrivateForm>
                    <Route exact path="/service/category/:name">
                        <CategoryDetail />
                    </Route>

                    <Route exact path="/service/category/:filterPath/:_id">
                        <SingleCourierDetail />
                    </Route>
                    <Route exact path="/service/category/:filterPath/:_id/customer-parcel-shipping-form">
                        <ShippingForm />
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
                    <Private exact path="/dashboard">
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
