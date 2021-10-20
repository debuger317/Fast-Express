import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../helper/Spinner';
import SideBar from '../components/dashboard/components/SideBar';
import TopBar from '../components/dashboard/components/TopBar';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ManageCompany from '../components/dashboard/wrapper/ManageCompany';
import CustomerList from '../components/dashboard/wrapper/CustomerList';
import ManageCategories from '../components/dashboard/wrapper/ManageCategories';

const DashboardHome = lazy(() => import('../components/dashboard/wrapper/Home'));
const Home = lazy(() => import('./Home'));
const CompanyList = lazy(() => import('../components/dashboard/components/manageCompany/CompanyList'));
const PendingCompany = lazy(() => import('../components/dashboard/components/manageCompany/PendingCompany'));
const Settings = lazy(() => import('../components/dashboard/wrapper/Settings'));
const UserList = lazy(() => import('../components/dashboard/wrapper/UserList'));
const OrderList = lazy(() => import('../components/dashboard/wrapper/OrderList'));
const Reports = lazy(() => import('../components/dashboard/wrapper/Reports'));
const Payment = lazy(() => import('../components/dashboard/wrapper/Payment'));
const AddReview =lazy(()=> import ('../components/dashboard/components/manageReview/AddReview'));
const ManageReviews =lazy(()=> import ('../components/dashboard/components/manageReview/ManageReviews'));

const Dashboard = () => {
    const back = useSelector((state) => state.dashboard.backtohome)
    return (
            <Router>
                <switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </switch>
                <div className={`w-full ${back ? 'hidden' : ''}`}>
                    <TopBar />
                </div>
                <div className="flex">
                    <div className={`w-1/4  ${back ? 'hidden' : ''}`}>
                        <SideBar/>
                    </div>
                    <div className="w-3/4 mt-16">
                    <Suspense fallback={<Spinner />}>
                        <Switch>
                            <Route exact path="/dashboard">
                                <DashboardHome />
                            </Route>
                            <Route path="/dashboard/userlist">
                                <UserList />
                            </Route>
                            <Route path="/dashboard/companylist">
                                <CompanyList />
                            </Route>
                            <Route path="/dashboard/pending-company">
                                <PendingCompany />
                            </Route>
                            <Route path="/dashboard/manage-company-info">
                                <ManageCompany />
                            </Route>
                            <Route path="/dashboard/customer-list">
                                <CustomerList />
                            </Route>
                            <Route path="/dashboard/orderlist">
                                <OrderList />
                            </Route>
                            <Route path="/dashboard/account-report">
                                <Reports />
                            </Route>
                            <Route path="/dashboard/payment-info">
                                <Payment />
                            </Route>
                            <Route path="">
                                <Settings />
                            </Route>
                            <Route path="/dashboard/add-review">
                                <AddReview />
                            </Route>
                            <Route path="/dashboard/manage-review">
                                <ManageReviews />
                            </Route>
                            <Route path="/dashboard/manage-category">
                                <ManageCategories />
                            </Route>
                        </Switch>
                        </Suspense>
                    </div>
                </div>
            </Router>
    );
};

export default Dashboard;