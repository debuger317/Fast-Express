import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';
import TopBar from '../components/header/sub-component/top-bar/TopBar';

const CheckoutForm = () => {
    return (
        <Fragment>
            <TopBar />
            <Navbar />
            <section>
                <div class="grid grid-rows-3 grid-flow-col gap-4">
                    <div class="row-span-3 bg-red-500">1</div>
                    <div class="col-span-2 bg-red-500">2</div>
                    <div class="row-span-2 col-span-2 bg-red-500">3</div>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
};

export default CheckoutForm;