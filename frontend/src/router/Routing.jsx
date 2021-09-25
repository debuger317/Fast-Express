import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Spinner from '../component/common/spinner/Spinner';
<<<<<<< HEAD
import AllFaq from '../pages/AllFaq';
=======
import Contact from '../pages/Contact';
>>>>>>> 26884f4190e8fe444768919f06ac3d0748cbda99

const Home = lazy(() => import('../pages/Home'));
const Services = lazy(() => import('../pages/Services'));
const NotFound = lazy(() => import('../pages/NotFound'));


const Routing = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Router>
                <Switch>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/service">
                        <Services />
                    </Route>
<<<<<<< HEAD
                    <Route exact path="/faq">
                        <AllFaq></AllFaq>
=======
                    <Route exact path="/">
                        <Home />
>>>>>>> 26884f4190e8fe444768919f06ac3d0748cbda99
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </Suspense>
    )
}

export default Routing;
