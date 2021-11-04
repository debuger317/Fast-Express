import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeCompany = () => {
    return (
        <div className="container mx-auto">
            <div className="text-center my-22">
                <div className="icon w-72 mx-auto mb-2">
                    <img src="https://i.ibb.co/MkgqCzM/17179-welcome-title-animation.gif" alt="" srcset="" />
                </div>
                <h1 className="text-5xl font-bold ">Thank you for your joing request!</h1>
                <p className="my-10 text-xl font-medium">Your account has been successfully placed. You can see your company details and other information.<br /> So, please go to your <Link className="underline  text-red-600" to="/dashboard">Dashboard</Link></p>
            </div>
        </div>
    );
};

export default WelcomeCompany;