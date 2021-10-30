import React from 'react';
import SignUpForm from '../components/authication/sub-component/UserSignUpForm';

const UserSignUp = () => {
    return (
        <div className="container mx-auto">
            <div className="flex my-20">
                <SignUpForm/>
            </div>
        </div>
    );
};

export default UserSignUp;