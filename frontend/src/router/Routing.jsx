import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const Home = lazy(() => import('../pages/Home'));
const NotMatch = lazy(() => import('../pages/NotMatch'));


const Routing = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <Switch>
                    <Route path="/">
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
