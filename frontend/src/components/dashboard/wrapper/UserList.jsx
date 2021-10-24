import React from 'react';
import AllUserList from '../components/ManageUser/AllUserList';
// import UserCard from '../components/ManageUser/UserCard';

const UserList = () => {
    return (
        <div className="container mx-auto w-4/5">
            {/* <UserCard /> */}
            <div>
                <AllUserList />
            </div>
            </div>
    );
};

export default UserList;