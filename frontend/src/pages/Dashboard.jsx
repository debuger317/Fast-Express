import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { useSelector } from 'react-redux';
import Spinner from '../helper/Spinner';
import SideBar from '../components/dashboard/components/SideBar';
import TopBar from '../components/dashboard/components/TopBar';
import CloseButton from './../components/dashboard/components/CloseButton';
import ManageCompany from '../components/dashboard/wrapper/ManageCompany';
import ManageCategories from '../components/dashboard/wrapper/ManageCategories';
import UserOrderList from '../components/dashboard/userDashboard/UserOrderList';
import CustomerListManage from '../components/dashboard/wrapper/CustomerListManage';
import MerchantDeliveryMan from '../components/dashboard/wrapper/MerchantDeliveryMan';
const CustomerOrderList = lazy(() => import('../components/dashboard/wrapper/CustomerOrderLists'));
const CustomerList = lazy(() => import('../components/dashboard/wrapper/CustomerLists'));
const DashboardHome = lazy(() => import('../components/dashboard/wrapper/Home'));
const Home = lazy(() => import('./Home'));
const CompanyList = lazy(() => import('../components/dashboard/components/manageCompany/CompanyList'));
const Settings = lazy(() => import('../components/dashboard/userDashboard/Settings'));
const UserList = lazy(() => import('../components/dashboard/wrapper/UserList'));
const AllOrderList = lazy(() => import('./../components/dashboard/wrapper/AllOrderList'));
const Reports = lazy(() => import('../components/dashboard/wrapper/Reports'));
const Payment = lazy(() => import('../components/dashboard/userDashboard/Payment'));
const AddReview = lazy(() => import('../components/dashboard/components/manageReview/AddReview'));
const ManageReviews = lazy(() => import('../components/dashboard/wrapper/ManageReview'));

const Dashboard = () => {
    const back = useSelector((state) => state.dashboard.backtohome)
    const open = useSelector((state) => state.dashboard.openmenu)

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
                <div className={`${open ? "w-24" : "w-72"} ${back ? 'hidden' : ''}`}>
                    <SideBar />
                </div>
                <div className="w-full mt-16">
                    <CloseButton />
                    <div className="m-16">
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
                            <Route path="/dashboard/customer-order-list">
                                <CustomerOrderList />
                            </Route>
                            <Route path="/dashboard/customer-list">
                                <CustomerList />
                            </Route>
                            <Route path="/dashboard/manage-company-info">
                                <ManageCompany />
                            </Route>
                            <Route path="/dashboard/customer-list">
                                <CustomerListManage />
                            </Route>
                            <Route path="/dashboard/order-all">
                                <AllOrderList />
                            </Route>
                            <Route path="/dashboard/account-report">
                                <Reports />
                            </Route>
                            <Route path="/dashboard/your-order-list">
                                <UserOrderList />
                            </Route>
                            <Route path="/dashboard/payment-info">
                                <Payment />
                            </Route>
                            <Route path="/dashboard/manage-setting">
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
                            <Route path="/dashboard/customer-order-list">
                                <CustomerOrderList />
                            </Route>
                            <Route path="/dashboard/manage-delivery-man">
                                <MerchantDeliveryMan />
                            </Route>
                        </Switch>
                        </Suspense>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default Dashboard;