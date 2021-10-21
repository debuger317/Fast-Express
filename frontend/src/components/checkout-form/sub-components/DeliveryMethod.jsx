import React from 'react';

const DeliveryMethod = () => {
    return (
        <div class="">

            <div class="md:p-8 p-6 bg-white   md:items-center">

                <h1 className="font-bold md:text-xl text-headin"> Delivery Method</h1>
                <h3>Select a delivery method</h3>
                <div class="flex pt-10 items-center gap-8">
                    <label class="inline-flex items-center">
                        <input type="radio" name="vehicle" class="h-5 w-5 text-red-600" />
                        <span class="ml-2 text-gray-700">
                            Home Delivery - 60৳
                        </span>
                    </label>
                    <label class="inline-flex items-center">
                        <input type="radio" name="vehicle" class="h-5 w-5 text-red-600" />
                        <span class="ml-2 text-gray-700">
                            Store Pickup - 0৳
                        </span>
                    </label>
                </div>

                <div>


                </div>

            </div>

        </div>
    );
};

export default DeliveryMethod;