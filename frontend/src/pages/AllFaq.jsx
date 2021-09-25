import React,{Fragment} from 'react';
import Footer from '../component/common/footer/Footer';
import Navbar from '../component/common/header/sub-component/nav-bar/Navbar';
import TopBar from '../component/common/header/sub-component/top-bar/TopBar';
import FaqDetails from '../component/faq/FaqDetails';


const AllFaq = () => {
    return (
        <Fragment>
            <TopBar  />
            <Navbar />
            <FaqDetails />
            <Footer />
        </Fragment>
    );
};

export default AllFaq;