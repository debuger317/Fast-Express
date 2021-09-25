import React from 'react';

const PromoSell = () => {
    return (
        <section className="promoSale-section bg-gradient bg-indigo-500 dark:bg-gray-800 text-center">
        
            <div className="container mx-auto  py-8 md:py-16">
                <div className="max-w-5xl  px-5 box-content">
                    <div className="flex  flex-col md:flex-row -mx-5">
                        <div className="w-2/4 px-5 mb-5 md:mb-0 text-center md:text-left">
                         
                            <h2 className="font-bold font-heading  md:text-4xl text-white">
                            70% OFFER 
                            </h2>
                            
                            <h6 className="font-bold font-heading text-2xl md:text-2xl text-white">
                        Do Not Miss 
                            </h6>
                           
                            <div className="mt-4 w-full md:w-44">
                                <button type="button" className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                 Order Now
                                </button>
                            </div>
                        </div>
                        <div className="w-2/4 mr-0  px-5">
                            <div className="flex  text-white text-center">
                                <div className="w-24 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                    <div className="text-2xl md:text-3xl font-semibold">
                                        <span>
                                            0
                                        </span>
                                        <span>
                                            1
                                        </span>
                                    </div>
                                    <div className="opacity-75 text-xs mt-3 uppercase">
                                        Day
                                    </div>
                                </div>
                                <div className="w-24 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                    <div className="text-2xl md:text-3xl font-semibold">
                                        <span>
                                            1
                                        </span>
                                        <span>
                                            8
                                        </span>
                                    </div>
                                    <div className=" opacity-75 text-xs mt-3 uppercase">
                                        Hour
                                    </div>
                                </div>
                                <div className="w-24 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                    <div className="text-2xl md:text-3xl font-semibold">
                                        <span>
                                            5
                                        </span>
                                        <span>
                                            0
                                        </span>
                                    </div>
                                    <div className=" opacity-75 text-xs mt-3 uppercase">
                                        Min
                                    </div>
                                </div>
                                <div className="w-24 md:w-24 border border-light-300 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                                    <div className="text-2xl md:text-3xl font-semibold">
                                        <span>
                                            1
                                        </span>
                                        <span>
                                            9
                                        </span>
                                    </div>
                                    <div className=" opacity-75 text-xs mt-3 uppercase">
                                        Second
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default PromoSell;
