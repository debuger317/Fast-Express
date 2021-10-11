import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import DashboardHome from '../components/dashboard/wrapper/Home';
import CompanyList from '../components/dashboard/components/manageCompany/CompanyList';
import PendingCompany from '../components/dashboard/components/manageCompany/PendingCompany';
import OrderList from '../components/dashboard/wrapper/OrderList';
import AccountSetting from '../components/dashboard/components/settings/AccountSetting';

import AllUserList from '../components/dashboard/components/ManageUser/AllUserList';
import Settings from '../components/dashboard/wrapper/Settings';
import Reports from '../components/dashboard/wrapper/Reports';

import Home from './Home';

const Dashboard = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/dashboard">
                    <DashboardHome />
                </Route>
                <Route path="/dashboard/customer-list">
                    <AllUserList />
                </Route>
                <Route path="/dashboard/companylist">
                    <CompanyList />
                </Route>
                <Route path="/dashboard/pending-company">
                    <PendingCompany />
                </Route>
                <Route path="/dashboard/orderlist">
                    <OrderList />
                </Route>
                <Route path="/dashboard/account-report">
                    <Reports />
                </Route>
                <Route path="/dashboard/account-setting">
                    <Settings />
                </Route>
                <Route path="/dashboard/my-account">
                    <AccountSetting />
                </Route>
            </Switch>

        </Router>


    );
};

export default Dashboard;