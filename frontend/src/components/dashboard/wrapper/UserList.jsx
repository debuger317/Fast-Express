import React from 'react';
import AllUserList from '../components/ManageUser/AllUserList';
import UserCard from '../components/ManageUser/UserCard';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';


const UserList = () => {
    return (

        <div className="grid grid-cols-5">
            <SideBar />
            <div className="col-span-4">
                <TopBar />
                <div>
                    <div className="container mx-auto w-4/5">
                        <UserCard />
                        <div>
                            <AllUserList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;