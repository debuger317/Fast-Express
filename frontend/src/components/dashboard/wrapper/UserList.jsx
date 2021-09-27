import React from 'react';
import AllUserList from './AllUserList';
import { users } from '../../../utiltes/LocalDatabase';
import UserCard from './UserCard';
import TopBar from '../components/TopBar';
import SideBar from '../components/SideBar';

const UserList = () => {
    return (
        <div>
            <TopBar/>
            <SideBar/>
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