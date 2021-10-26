import React from 'react';
import SingupForm from '../components/authication/sub-component/CompanySignUpForm';

const CompanySignUp = () => {
    return (
        <div className="container mx-auto">
            <div className="flex my-20">
                <SingupForm/>
            </div>
        </div>
    );
};

export default CompanySignUp;