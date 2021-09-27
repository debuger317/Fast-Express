import React, { Fragment } from 'react';
import Navbar from '../component/common/header/sub-component/nav-bar/Navbar';
import TopBar from '../component/common/header/sub-component/top-bar/TopBar';
import SignIn from '../component/pages/login/SignIn';

const Login = () => {
  return (
   <Fragment>
     <TopBar/>
     <Navbar/>
     <SignIn/>
   </Fragment>
  );
};

export default Login;