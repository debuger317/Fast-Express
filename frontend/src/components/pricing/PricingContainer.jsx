import React,{useState} from 'react';
import { FaTruckMoving, FaRoad } from 'react-icons/fa';

const PricingContainer = () => {
    const [getValue, setValue] = useState({
        kg: 0,
        time: 0,
        total: 0
    })
    const handleSubmit = e => {
        e.preventDefault();
        let price = +getValue.kg + +getValue.time;
        const newGetValue = { ...getValue, total: price }
        setValue(newGetValue)
        console.log(newGetValue);
    }
    const handleBlur = e => {
        console.log(e.target.name);
        if (e.target.name === "kg") {
            const newGetValue = { ...getValue, kg: e.target.value };
            setValue(newGetValue);
        }
        if (e.target.name === "time") {
            const newGetValue = { ...getValue, time: e.target.value };
            setValue(newGetValue);
        }
    }
    return (
        <>
            <section className="container m-16">
                <div className="bg-white border py-16 border-gray-200 max-w-2xl mx-auto shadow-2xl md:w-3/4">
                    <FaTruckMoving className="text-9xl text-red-500 mx-auto" />
                    {/* <FaRoad className="text-2xl origin-center transform rotate-90 text-red-500 mx-auto" /> */}
                    <form onSubmit={handleSubmit} className="">
                        <div className="bg-gray-900 w-3/5 mx-auto rounded-3xl py-1 text-gray-200 text-center"><small>Estimated Delivery Cost</small></div>
                        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                            <h2 title="weight title" className="max-w-sm mx-auto md:w-1/3">
                                Weight (KG)
                            </h2>
                            <div className="max-w-sm mx-auto md:w-2/3">
                                <div className=" relative ">
                                    <select onBlur={handleBlur} name="kg" id="kg" form="carform" className="rounded-lg border-b-2 flex-1 appearance-none border-red-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base text-center focus:outline-none focus:ring-0 focus:border-green-300 focus:ring-purple-100 focus:border-transparent" title="select-weight">
                                        <option value="0" name="zero">Please Select Weight(s)</option>
                                        <option value="100" name="one">1</option>
                                        <option value="150" name="two">2</option>
                                        <option value="200" name="three">3</option>
                                        <option value="300" name="five">5</option>
                                        <option value="500" name="ten">10</option>
                                        <option value="750" name="fifteen">15</option>
                                        <option value="900" name="tweenty">20</option>
                                        <option value="1200" name="thirty">30</option>
                                        <option value="1500" name="forty">40</option>
                                        <option value="1600" name="fifty">50</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                            <h2 className="max-w-sm mx-auto md:w-1/3">
                                Service Level
                            </h2>
                            <div className="max-w-sm mx-auto md:w-2/3">
                                <div className=" relative ">
                                    <select onBlur={handleBlur} name="time" id="time" form="carform" className="rounded-lg border-b-2 flex-1 appearance-none border-red-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base text-center focus:outline-none focus:ring-0 focus:border-green-300 focus:ring-purple-600 focus:border-transparent">
                                        <option value="0">Please Select Delivery Way</option>
                                        <option value="100">3 Hours Delivery</option>
                                        <option value="50">5 Hours Delivery</option>
                                        <option value="40">6 Hours Delivery</option>
                                        <option value="30">Same day Delivery</option>
                                        <option value="20">Within 2 Days</option>
                                        <option value="0">Within a Week</option>
                                        <option value="0">More than a Week</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="text-center pb-8">
                            <input type="submit" className="bg-red-600 py-1 px-3 text-white text-semibold uppercase mx-auto rounded-2xl" value="Calculate" />
                        </div>
                    </form>

                    <table class="table mb-6 p-4 bg-white shadow border-0 rounded-lg mx-auto">
                        <thead className="text-red-500">
                            <tr >
                                <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal ">
                                    #
                                </th>
                                <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal ">
                                    Item
                                </th>
                                <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal ">
                                    Price
                                </th>
                                <th class="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal ">
                                    Total
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-gray-700">
                                <td class="border-b-2 p-4 dark:border-dark-5">
                                    1
                                </td>
                                <td class="border-b-2 p-4 dark:border-dark-5">
                                    Weigth of Items ({getValue.kg }) kg
                                </td>
                                <td class="border-b-2 p-4 dark:border-dark-5">
                                    BDT { getValue.kg}.00
                                </td>
                                <td class="border-b-2 p-4 dark:border-dark-5">
                                    BDT { getValue.kg }.00
                                </td>
                            </tr>
                            <tr class="text-gray-700">
                                <td class="border-b-2 p-4 dark:border-dark-5">
                                    2
                                </td>
                                <td class="border-b-2 p-4 dark:border-dark-5">
                                    Weigth of Items ({ getValue.time}) kg
                                </td>
                                <td class="border-b-2 p-4 dark:border-dark-5">
                                    BDT {getValue.time}.00
                                </td>
                                <td class="border-b-2 p-4 dark:border-dark-5">
                                    BDT {getValue.time }.00
                                </td>
                            </tr>
                            <hr />
                            <tr className="text-red-500">
                                <td class="border-b-2 p-4 dark:border-dark-5">
                                    Total
                                </td>
                                <td></td>
                                <td></td>
                                <td class="border-b-2 p-4 dark:border-dark-5">
                                    BDT{getValue.total}.00
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>

    );
};

export default PricingContainer;