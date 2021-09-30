import React, { Fragment } from 'react';
import SignIn from '../components/authication/SignIn';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';
import TopBar from '../components/header/sub-component/top-bar/TopBar';

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