import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm';

const stripePromise = loadStripe('pk_test_51IsmhXJoZUCv3AVnl8Pm2repmwqdbxpNpB24pSkjeC9hY5U39r7JeispJoDJCuZqGZjTlGgObwXnG6PQUOPympSk008pqJIX3U');
const PaymentMethod = ({ handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <h1 className="font-bold md:text-xl text-headin"> Payment Method</h1>
            <div class="md:p-8 pb-5 p-6 bg-white ">
                    <SplitCardForm handlePayment={handlePayment}></SplitCardForm>
                <h2>Select a payment method</h2>

                <br />
                <div class="flex items-center pt-5 gap-8">
                   
                    <label class="inline-flex items-center">
                        <input type="radio" name="vehicle" class="h-5 w-5 text-red-600" />
                        <span class="ml-2 text-gray-700">
                            Cash on Delivery
                        </span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="radio" name="vehicle" class="h-5 w-5 text-red-600" />
                        <span class="ml-2 text-gray-700">
                            Online Payment

                        </span>
                    </label>
                </div>


            </div>
        </Elements>

    );
};

export default PaymentMethod;