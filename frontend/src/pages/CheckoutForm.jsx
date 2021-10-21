import React, { Fragment } from 'react';
import CustomerInfo from '../components/checkout-form/sub-components/CustomerInfo';
import DeliveryMethod from '../components/checkout-form/sub-components/DeliveryMethod';
import OrderOverview from '../components/checkout-form/sub-components/OrderOverview';
import PaymentMethod from '../components/checkout-form/sub-components/PaymentMethod';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';
import TopBar from '../components/header/sub-component/top-bar/TopBar';

const CheckoutForm = () => {
    return (
        <Fragment>
            <TopBar />
            <Navbar />
         
                <div class="  grid grid-cols-3 gap-4">
                    <div className="container col-span-1 m-10 row-span-3 border-4 border-light-blue-500 border-opacity-100 ">
                    <CustomerInfo />
                      </div>

                    <div className="m-10 box-border border-4 border-light-blue-500 border-opacity-100 ">
                   
                        <PaymentMethod />
                    </div>

                    <div className="m-10 border-4 border-light-blue-500 border-opacity-100 ">
                        <DeliveryMethod />
                    </div>

                    <div className="m-10 row-span-2 border-4 border-light-blue-500 border-opacity-100  col-span-2">
                        <OrderOverview />
                    </div>
                </div>
           
            <Footer />
        </Fragment>
    );
};

export default CheckoutForm;