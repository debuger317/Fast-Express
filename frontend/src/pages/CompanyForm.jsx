import React, { Fragment } from 'react';
import AddCompanyForm from '../components/add-company-form/AddCompanyForm';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';
import TopBar from '../components/header/sub-component/top-bar/TopBar';
const CompanyForm = () => {
  return (

    <Fragment>
      <TopBar/>
      <Navbar />
      {/* add company form */}
      <AddCompanyForm/>
      <Footer/>
    </Fragment>
  );
};

export default CompanyForm;