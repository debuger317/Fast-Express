import React from 'react';
import AllUserList from './AllUserList';
import { users } from '../../../utiltes/LocalDatabase';
import UserCard from './UserCard';


const UserList = () => {
    return (
        <div>
            <div className="container mx-auto w-4/5">
                <UserCard/>
            <div>
                <AllUserList key={users.id} user={users} />
            </div>
        </div>
        </div>
    );
};

export default UserList;