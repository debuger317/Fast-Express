import React from 'react';
import { useFormContext } from "react-hook-form";

const DeliveryMethod = () => {
    const methods = useFormContext();

    return (
        <div class="shadow bg-white dark:bg-gray-700 relative overflow-hidden mr-10 p-5">
            <h2 class="border-b border-gray-200 text-xl font-bold">4. Delivery Method</h2>
            <h6 class="my-3">Select a delivery method</h6>
            <div class="flex items-center gap-4 my-3">
                <input {...methods.register("deliveryoption")} class="h-4 w-4" type="radio" name="delivery" value="home" required/>
                <label for="">Home delivery</label>
                <input {...methods.register("deliveryoption")} class="h-4 w-4" type="radio" name="delivery" value="location" required/>
                <label for="">Only for location</label>
            </div>
        </div>
    );
};

export default DeliveryMethod;