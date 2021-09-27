import React, { Fragment } from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';
import TopBar from '../components/header/sub-component/top-bar/TopBar';
import PageTitle from '../components/page-title/PageTitle';
import CategoryList from '../components/service/CategoryList';
import SearchBar from '../components/service/SearchBar';

const Services = () => {
    return (
        <Fragment>
            <TopBar />
            <Navbar />
            {/* service container */}
            <PageTitle title="services" pageName="Browse Services"/>
            <SearchBar/>
            <CategoryList/>
            <Footer />
        </Fragment>
    )
}

export default Services;

//service page
