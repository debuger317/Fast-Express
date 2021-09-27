import React, { Fragment } from 'react';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';
import TopBar from '../components/header/sub-component/top-bar/TopBar';
import SignIn from '../components/login/SignIn';

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