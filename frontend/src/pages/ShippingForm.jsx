import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';
import TopBar from '../components/header/sub-component/top-bar/TopBar';
import CustomerInfoForm from '../components/parcel-shipping-form/sub-components/CustomerInfoForm';
import DeliveryMethod from '../components/parcel-shipping-form/sub-components/DeliveryMethod';
import ParcelOverview from '../components/parcel-shipping-form/sub-components/ParcelOverview';
import PaymentMethod from '../components/parcel-shipping-form/sub-components/PaymentMethod';
import PromoCode from '../components/parcel-shipping-form/sub-components/PromoCode';
const ShippingForm = () => {
    return (
        <Fragment>
            <TopBar />
            <Navbar />
            {/* Container */}
            <section class="text-gray-600 body-font">
                <div class="container px-5 pb-24 pt-5 mx-auto flex flex-wrap">
                    <div class="lg:w-1/3 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        {/* customer input form */}
                        <CustomerInfoForm />
                    </div>
                    <div class="flex flex-wrap lg:py-6 lg:w-2/3">
                        <div className="w-1/2">
                            <PaymentMethod />
                        </div>
                        <div className="w-1/2">
                            <DeliveryMethod />
                        </div>
                        <div class="lg:py-6 lg:w-full">
                            <PromoCode />
                        </div>
                        <div class="lg:py-6 lg:w-full">
                            <ParcelOverview />
                        </div>
                    </div>
                    <div className="w-full mx-10">
                        <div class="shadow bg-white dark:bg-gray-700 relative overflow-hidden flex items-center justify-between">
                            <div className="flex ml-10">
                                <label class="flex items-center space-x-3 mb-3 ml-5">
                                    <input type="checkbox" name="checked-demo1" class="form-tick  bg-white bg-check h-4 w-4 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none" />
                                    <span class="text-gray-700 dark:text-white font-normal">
                                        Accept all term and conditions
                                    </span>
                                </label>
                                <label class="flex items-center space-x-3 mb-3 ml-5">
                                    <input type="checkbox" name="checked-demo2" class="form-tick  bg-white bg-check h-4 w-4 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none" />
                                    <span class="text-gray-700 dark:text-white font-normal">
                                        Accept all term and conditions
                                    </span>
                                </label>
                                <label class="flex items-center space-x-3 mb-3 ml-5">
                                    <input type="checkbox" name="checked-demo4" class="form-tick  bg-white bg-check h-4 w-4 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none" />
                                    <span class="text-gray-700 dark:text-white font-normal">
                                        Accept all term and conditions
                                    </span>
                                </label>
                            </div>
                            <div class="flex m-6">
                                <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Comform order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
};

export default ShippingForm;