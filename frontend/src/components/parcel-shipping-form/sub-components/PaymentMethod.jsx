import React from 'react';
import PaymentCard from './PaymentCard';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
const PaymentMethod = () => {
    return (

        <div class="shadow-lg bg-white dark:bg-gray-700 relative overflow-hidden mr-10 p-5">
            <h2 class="border-b border-gray-200 text-xl font-bold">Payment Method</h2>
            <h6 class="my-3">Select a payment method</h6>
            <div class="flex items-center gap-4 my-3">
                <input class="h-4 w-4" type="radio" name="payment" value="onlinepayment" />
                <label for="">Online payment</label>
                <input class="h-4 w-4" type="radio" name="payment" value="cashon" />
                <label for="">Cash on delivery</label>
            </div>

            <Elements stripe={promise}>
                <PaymentCard />
            </Elements>
        </div>
    );
};

export default PaymentMethod;