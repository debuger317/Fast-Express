import React, { Fragment } from 'react';
import SingleBlog from '../components/blog/sub-component/SingleBlog';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/sub-component/nav-bar/Navbar';
import TopBar from '../components/header/sub-component/top-bar/TopBar';

const BlogPage = () => {
    return (
        <Fragment>
             <TopBar />
            <Navbar />
              {/* blog container */}
              <SingleBlog />
              <Footer />
        </Fragment>
    );
};

export default BlogPage;