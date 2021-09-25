import React from 'react';
import Spinnerlogo from '../../../assets/images/fast-express-spinner.gif';
const Spinner = () => {
    return (
        <div style={{background:'#f1ffee'}} className="mt-20 h-screen">
            <div className="flex items-center content-center justify-center">
            <img src={Spinnerlogo} alt="" srcset="" />
            </div>
        </div>
    )
}

export default Spinner;
