import React from 'react';

const OrderOverview = () => {
    return (
        <div class="md:p-8 p-6 bg-white ">
            <h1 className="font-bold md:text-xl text-headin"> Over view</h1>


            <table class="table p-4 bg-white w-full shadow rounded-lg">
                <thead>
                    <tr>
                        <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            #
                        </th>
                        <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            First name
                        </th>
                        <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Last name
                        </th>
                        <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Username
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-gray-700">
                        <td class="border p-4 dark:border-dark-5">
                            1
                        </td>
                        <td class="border p-4 dark:border-dark-5">
                            Jean Marc
                        </td>
                        <td class="border p-4 dark:border-dark-5">
                            Louis
                        </td>
                        <td class="border p-4 dark:border-dark-5">
                            Jl987
                        </td>
                    </tr>
                    <tr class="text-gray-700">
                        <td class="border p-4 dark:border-dark-5">
                            2
                        </td>
                        <td class="border p-4 dark:border-dark-5">
                            Eric
                        </td>
                        <td class="border p-4 dark:border-dark-5">
                            Prouve
                        </td>
                        <td class="border p-4 dark:border-dark-5">
                            prouveE
                        </td>
                    </tr>
                    <tr class="text-gray-700">
                        <td class="border p-4 dark:border-dark-5">
                            3
                        </td>
                        <td class="border p-4 dark:border-dark-5">
                            Julien
                        </td>
                        <td class="border p-4 dark:border-dark-5">
                            Clai
                        </td>
                        <td class="border p-4 dark:border-dark-5">
                            CJUL87
                        </td>
                    </tr>
                    <tr class="text-gray-700">
                        <td class="border p-4 dark:border-dark-5">
                            4
                        </td>
                        <td class="border p-4 dark:border-dark-5">
                            Igor
                        </td>
                        <td class="border p-4 dark:border-dark-5">
                            Louth
                        </td>
                        <td class="border p-4 dark:border-dark-5">
                            IGL89_9
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>

    );
};

export default OrderOverview;