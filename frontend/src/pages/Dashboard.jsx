import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SideBar from '../components/dashboard/components/SideBar';
import TopBar from '../components/dashboard/components/TopBar';
import Home from '../components/dashboard/wrapper/Home';
import CompanyList from '../components/dashboard/components/manageCompany/CompanyList';
import PendingCompany from '../components/dashboard/components/manageCompany/PendingCompany';
import OrderList from '../components/dashboard/wrapper/OrderList';
import AccountSetting from '../components/dashboard/components/settings/AccountSetting';
import AllUserList from '../components/dashboard/components/ManageUser/AllUserList';
import Settings from '../components/dashboard/wrapper/Settings';
import Reports from '../components/dashboard/wrapper/Reports';
import AddReview from '../components/dashboard/components/manageReview/AddReview';
import ManageReviews from '../components/dashboard/components/manageReview/ManageReviews';

const Dashboard = () => {
    return (
        <div className="grid grid-cols-5">
            <Router>
                <SideBar />
                <div className="col-span-4">
                    <TopBar />
                    <Switch>
                        <Route exact path="/dashboard">
                            <Home />
                        </Route>
                        <Route path="/dashboard/userlist">
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
                        <Route path="/dashboard/addreview">
                            <AddReview />
                        </Route>
                        <Route path="/dashboard/managereviews">
                            <ManageReviews />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>

    );
};

export default Dashboard;