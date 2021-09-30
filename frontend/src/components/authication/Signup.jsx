import React from 'react';
import CompanySignUp from './sub-component/CompanySignUp';
import UserSignUp from './sub-component/UserSignUp';

const Signup = () => {
    return (
        <div className="container mx-auto">
            <div className="flex my-20">
                <UserSignUp/>
                <CompanySignUp/>
            </div>
        </div>
    );
};

export default Signup;