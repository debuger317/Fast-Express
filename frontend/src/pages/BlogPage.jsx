import React, { Fragment } from 'react';
import SingleBlog from '../components/blog/sub-component/SingleBlog';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';
import TopBar from '../components/header/sub-component/top-bar/TopBar';
import PageTitle from '../components/page-title/PageTitle';

const BlogPage = () => {
    return (
        <Fragment>
             <TopBar />
            <Navbar />
              {/* blog container */}
              <PageTitle title="blogs" pageName="Browse Blogs"/>
              <SingleBlog />
              <Footer />
        </Fragment>
    );
};

export default BlogPage;