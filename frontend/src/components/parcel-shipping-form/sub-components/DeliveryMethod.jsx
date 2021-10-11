import React from 'react';

const DeliveryMethod = () => {
    return (
        <div class="shadow bg-white dark:bg-gray-700 relative overflow-hidden mr-10 p-5">
            <h2 class="border-b border-gray-200 text-xl font-bold">3. Delivery Method</h2>
            <h6 class="my-3">Select a delivery method</h6>
            <div class="flex items-center gap-4 my-3">
                <input class="h-4 w-4" type="radio" name="delivery" value="home" />
                <label for="">Home delivery</label>
                <input class="h-4 w-4" type="radio" name="delivery" value="location" />
                <label for="">Only for location</label>
            </div>
        </div>
    );
};

export default DeliveryMethod;