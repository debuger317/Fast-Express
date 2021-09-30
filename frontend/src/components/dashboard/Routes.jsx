import React, { Suspense, lazy } from 'react';
import Spinner from '../../helper/Spinner';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
const Home = lazy(() => import('./wrapper/Home'));
const CompanyList = lazy(() => import('./wrapper/CompanyList'));
const PendingCompany = lazy(() => import('./wrapper/manageCompany/PendingCompany'));
const OrderList = lazy(() => import('./wrapper/OrderList'));
const UserList = lazy(() => import('./wrapper/UserList'));

const Routes = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Router>
                <Switch>
                    <Route exact path="/dashboard">
                        <Home />
                    </Route>

                    <Route path="/companylist">
                        <CompanyList />
                    </Route>

                    <Route path="/pending-company">
                        <PendingCompany />
                    </Route>

                    <Route path="/orderlist">
                        <OrderList />
                    </Route>

                    <Route path="/userlist">
                        <UserList />
                    </Route>

                </Switch>
            </Router>
        </Suspense>
    );
};

export default Routes;