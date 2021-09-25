import React, { Fragment } from 'react';
import Footer from '../component/common/footer/Footer';
import Navbar from '../component/common/header/sub-component/nav-bar/Navbar';
import TopBar from '../component/common/header/sub-component/top-bar/TopBar';
import PageTitle from '../component/common/page-title/PageTitle';
import CategoryList from '../component/pages/service/CategoryList';
import SearchBar from '../component/pages/service/SearchBar';

const Services = () => {
    return (
        <Fragment>
            <TopBar />
            <Navbar />
            {/* service container */}
            <PageTitle title="services"/>
            <SearchBar/>
            <CategoryList/>
            <Footer />
        </Fragment>
    )
}

export default Services;

//service page
