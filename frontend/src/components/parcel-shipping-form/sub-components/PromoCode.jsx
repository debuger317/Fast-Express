import React from 'react';
import { useFormContext } from "react-hook-form";

const PromoCode = () => {
    const methods = useFormContext();

    return (
        <div class="shadow bg-white dark:bg-gray-700 relative overflow-hidden mr-10 flex py-5">
            <div className="w-1/2 md:w-full">
                <form class="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 justify-center">
                    <div class="relative">
                        <input type="text" {...methods.register("giftvoucher")} class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Voucher Code" />
                    </div>
                    <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                        Apply Voucher
                    </button>
                </form>
            </div>
            <div className="w-1/2 md:w-full">
                <form class="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 justify-center">
                    <div class="relative">
                        <input type="text"  {...methods.register("promocode")} class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Promo Code" />
                    </div>
                    <button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                        Apply Coupon
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PromoCode;