import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';
import TopBar from '../components/header/sub-component/top-bar/TopBar';

const CheckoutForm = () => {
    return (
        <Fragment>
            <TopBar />
            <Navbar />
            <section className="">
                <div class="h-100  w-full grid grid-cols-2 grid-rows-2 grid-flow-col  gap-4">
                    <div className="bg-red-500 ">1</div>
                    <div className="bg-red-500 ">2</div>
                    <div className="bg-red-500">3</div>
                    <div className="bg-red-500">4</div>
                    <div className="bg-red-500">5</div>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
};

export default CheckoutForm;