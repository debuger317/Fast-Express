import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SideBar from '../components/dashboard/components/SideBar';
import TopBar from '../components/dashboard/components/TopBar';
import Home from '../components/dashboard/wrapper/Home';
import UserList from '../components/dashboard/wrapper/UserList';
import CompanyList from '../components/dashboard/wrapper/CompanyList';
import OrderList from '../components/dashboard/wrapper/OrderList';
import Account from '../components/dashboard/wrapper/Account';

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
                        <Route path="/userlist">
                            <UserList />
                        </Route>
                        <Route path="/companylist">
                            <CompanyList />
                        </Route>
                        <Route path="/orderlist">
                            <OrderList />
                        </Route>
                        <Route path="/my-account">
                            <Account />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>

    );
};

export default Dashboard;