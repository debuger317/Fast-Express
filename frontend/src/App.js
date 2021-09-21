import React from 'react';
import Footer from './component/footer/Footer';
import Navbar from './component/header/sub-component/nav-bar/Navbar';
import Support from './component/support/Support';
import Review from './component/reviews/Review.jsx';
import OurMission from './component/our-mission/OurMission';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <OurMission/>
      <Support/>
      <Review/>
    </div>
  )
}

export default App;
