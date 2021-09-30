import React,{Fragment} from 'react';
import Footer from '../component/common/footer/Footer';
import Navbar from '../component/common/header/sub-component/nav-bar/Navbar';
import TopBar from '../component/common/header/sub-component/top-bar/TopBar';
import PageTitle from '../component/common/page-title/PageTitle';
import FaqDetails from '../component/pages/faq/FaqDetails';



const AllFaq = () => {
    return (
        <Fragment>
            <TopBar  />
            <Navbar />
            <PageTitle title="Faq" pageName="Ask And Quession"/>
            <FaqDetails />
            <Footer />
        </Fragment>
    );
};

export default AllFaq;