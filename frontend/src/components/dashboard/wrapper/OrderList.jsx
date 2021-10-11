import React, { Fragment } from 'react';
import OrderManagement from '../components/manage-order/OrderManagement';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';

const OrderList = () => {
  return (

    <div className="grid grid-cols-5">
      <SideBar />
      <div className="col-span-4">
        <TopBar />
        <OrderManagement />
      </div>
    </div>

  );
};

export default OrderList;