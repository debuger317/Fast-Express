import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Spinner from '../component/common/spinner/Spinner';
import Pricing from '../component/pricing-page/Pricing';

const Home = lazy(() => import('../pages/Home'));
const Services = lazy(() => import('../pages/Services'));
const NotMatch = lazy(() => import('../pages/NotMatch'));


const Routing = () => {
    return (
        <Suspense fallback={<Spinner/>}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/pricing">
                        <Pricing />
                    </Route>
                    <Route exact path="/service">
                        <Services />
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
