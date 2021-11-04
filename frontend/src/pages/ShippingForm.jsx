import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { CgSpinner } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';
import TopBar from '../components/header/sub-component/top-bar/TopBar';
import CustomerInfoForm from '../components/parcel-shipping-form/sub-components/CustomerInfoForm';
import DeliveryMethod from '../components/parcel-shipping-form/sub-components/DeliveryMethod';
import ParcelOverview from '../components/parcel-shipping-form/sub-components/ParcelOverview';
import PaymentMethod from '../components/parcel-shipping-form/sub-components/PaymentMethod';
import PromoCode from '../components/parcel-shipping-form/sub-components/PromoCode';

const ShippingForm = () => {
    const methods = useForm();
    const history = useHistory();
    const [error, setError] = useState(false);
    const [pending, setPending] = useState(false);
    const [exit_user, setExitUser] = useState();
    console.log(exit_user);
    const MerchantOverview = useSelector(state => state.merchant.selectedMerchant);
    const { _id, name, email } = MerchantOverview;

    const user = useSelector((state) => state.auth.authdetails)

    const parcel_photo_url = useSelector((state) => state.users.parcelPhotoUrl)

    const { handleSubmit } = methods;

    const findUser = async () => {
        const res = await axios.get(`https://fastexpress.herokuapp.com/api/user/${user._id}`)
        setExitUser(res.data);
    }

    useEffect(() => {
        findUser()
    }, [_id])
    const onSubmit = async (data) => {
        setError(false)

        const Neworder = {
            merchantId: _id,
            merchantmail: email,
            merchantName: name,
            userId: user._id,
            fname: data.fName,
            lname: data.lName,
            address: data.address,
            usermail: user.email,
            pickupFrom: data.pickupform,
            pickupTo: data.pickupto,
            phone: data.phone,
            orderStatus: "pending",
            city: data.city,
            zip: data.zip,
            deliverytype: data.deliverytype,
            parcelname: data.parcelName,
            parcelphoto: parcel_photo_url,
            parceltype: data.parceltype,
            parcelweight: data.parcelweight,
        }
        const newUser = {
            Id: user._id,
            name: data.fName + ' ' + data.lName,
            email: user.email,
            role: "user",
            status: "active",
            address: data.address,
            phone: data.phone,
        }
        console.log(newUser);

        const newPayment = {
            userId: user._id,
            usermail: user.email,
            paymentType: data.paymentType,
            paymentAmount: 12,
            paymentStatus: "pending",
            cardNumber: 42424242424,
            cardtype: 'credit',
        }
        setPending(true)
        try {
            const res = await axios({
                method: 'post',
                url: 'https://fastexpress.herokuapp.com/api/order/addorder',
                data: Neworder
            });

            if (exit_user === null) {

                    try {
                        const res = await axios({
                            method: 'post',
                            url: 'https://fastexpress.herokuapp.com/api/user/adduser',
                            data: newUser
                        });
                        console.log('respons',res);
                    }
                    catch (err) {
                        setError(true);
                        setPending(false)
                        console.log(err);
                    }
                }

                if (res) {
                    try {
                         await axios(
                            {
                                method: 'post',
                                url: 'https://fastexpress.herokuapp.com/api/payment/user/newPayment',
                                data: newPayment
                            });


                    }
                    catch (err) {
                        setError(true);
                        setPending(false)
                        console.log(err);
                    }
                }


        } catch (err) {
            setError(true);
            setPending(false)
            console.log(err);
        }
        history.push("/user-order/order=success!")
    }
    return (
        <Fragment>
            <TopBar />
            <Navbar />
            {/* Container */}
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit((data) => onSubmit(data))}>
                    <section class="text-gray-600 body-font">
                        <div class="container px-5 pb-24 pt-5 mx-auto flex flex-wrap">
                            <div class="lg:w-1/3 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                                {/* customer input form */}
                                <CustomerInfoForm />
                            </div>
                            <div class="flex flex-wrap lg:pb-6 lg:w-2/3">
                                <div class="lg:py-6 lg:w-full">
                                    <ParcelOverview />
                                </div>

                                <div className="w-1/2">
                                    <PaymentMethod />
                                </div>
                                <div className="w-1/2">
                                    <DeliveryMethod />
                                </div>
                                <div class="lg:py-6 lg:w-full">
                                    <PromoCode />
                                </div>
                            </div>
                            <div className="w-full mx-10">
                                <div class="shadow bg-white dark:bg-gray-700 relative overflow-hidden flex items-center justify-between">
                                    <div className="flex ml-10">
                                        <label class="flex items-center space-x-3 mb-3 ml-5">
                                            <input type="checkbox" name="checked-demo1" class="form-tick  bg-white bg-check h-4 w-4 border border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:outline-none" required />
                                            <span class="text-gray-700 dark:text-white font-normal">
                                                I have read and agree to the Terms and Conditions, Privacy Policy and Refund and Return Policy
                                            </span>
                                        </label>

                                    </div>
                                    <div class="flex w-22 m-6">
                                        <button type="submit" class="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                                            {pending ?
                                                <CgSpinner class="animate-spin text-xl" /> : "Comform order"
                                            }
                                        </button>
                                    </div>
                                    {error && <span style={{ color: 'red', marginTop: '10px' }}>Something went wrong!</span>}
                                </div>
                            </div>
                        </div>
                    </section>
                </form>
            </FormProvider>
            <Footer />
        </Fragment>
    );
};

export default ShippingForm;
