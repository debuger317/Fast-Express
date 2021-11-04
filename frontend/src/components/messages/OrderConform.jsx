import React from 'react';
import { Link } from 'react-router-dom';

const OrderConform = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center my-36">
                <div className="icon w-36 mx-auto mb-2">
                    <img src="https://i.ibb.co/BfzyHSG/83043-gift-box.gif" alt="" srcset="" />
                </div>
                <h1 className="text-5xl font-bold ">Thank you for your order!</h1>
                <p className="my-10 text-xl font-medium">Your order has been successfully placed. You can see your order details and other information.<br/> So, please go to your <Link className="underline  text-red-600" to="/dashboard">Dashboard</Link></p>
            </div>
        </div>
    );
};

export default OrderConform;