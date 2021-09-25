import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Spinner from '../component/common/spinner/Spinner';
import AllFaq from '../pages/AllFaq';

const Home = lazy(() => import('../pages/Home'));
const Services = lazy(() => import('../pages/Services'));
const NotMatch = lazy(() => import('../pages/NotMatch'));


const Routing = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/service">
                        <Services />
                    </Route>
                    <Route exact path="/faq">
                        <AllFaq></AllFaq>
                    </Route>
                    <Route path="*">
                        <NotMatch />
                    </Route>
                </Switch>
            </Router>
        </Suspense>

    )
}

export default Routing;
