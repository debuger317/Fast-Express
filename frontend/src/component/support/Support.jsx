import React from 'react';
import supportTeam from '../../assets/images/support-team.jpg';
import { supportData } from '../../utiltes/LocalDatabase';

const Support = () => {
    return (
        <section class="support-section text-center">
            <h1>Customer Support</h1>
            <div class="background-color text-white max-w-screen-xl p-4 py-10 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-10">
                <div class="relative">
                    <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div class="lg:col-start-2 lg:max-w-2xl ml-auto">
                            <p class="text-base leading-6 text-indigo-500 font-semibold uppercase">
                                Uninterrupted Support
                            </p>
                            <h4 class="mt-2 text-2xl leading-8 font-extrabold text-black dark:text-white sm:text-3xl sm:leading-9">
                                Interactivity Between Customer and Courier is the Key of the Success.
                            </h4>
                            <p class="mt-4 text-lg leading-6 text-black dark:text-gray-300">
                                Our friendly, professional customer service agents are available by instant chat support  everyday, Monday to Sunday, 24/7. Change your delivery, purchase more services, ask questions about your courier … ask away! We’re here to help.
                            </p>
                            <ul class="mt-8 md:grid md:grid-cols-2 gap-6">
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                            Chat Support
                                        </span>
                                    </div>
                                </li>
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                            Parcel tracker
                                        </span>
                                    </div>
                                </li>
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                            24/7 support
                                        </span>
                                    </div>
                                </li>
                                <li class="mt-6 lg:mt-0">
                                    <div class="flex">
                                        <span class="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                                            <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </span>
                                        <span class="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                                            Individual & Business Services
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                            <div class="relative space-y-4">
                                {/* mapped data from supportData  */}
                                {supportData.map(item =>
                                    <div class="flex items-end justify-center lg:justify-start space-x-4">
                                        <img class="rounded-lg shadow-lg" src={item.img} alt="supportImage" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Support;
