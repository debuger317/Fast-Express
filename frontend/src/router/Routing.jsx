import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Spinner from '../component/spinner/Spinner';
import Contact from '../pages/Contact';

const Home = lazy(() => import('../pages/Home'));
const NotMatch = lazy(() => import('../pages/NotMatch'));


const Routing = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Router>
                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/">
                        <Home />
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
