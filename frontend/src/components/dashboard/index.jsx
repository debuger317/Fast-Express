import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import Home from './wrapper/Home';
import UserList from './wrapper/UserList';
import CompanyList from './wrapper/CompanyList';
import OrderList from './wrapper/OrderList';

const Container = () => {
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
                </Switch>
            </div>
            </Router>
        </div>
        
    );
};

export default Container;