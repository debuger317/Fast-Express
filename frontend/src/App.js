import React from 'react';
import Footer from './component/footer/Footer';
import Navbar from './component/header/sub-component/nav-bar/Navbar';
import OurMission from './component/our-mission/OurMission';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <OurMission/>
    </div>
  )
}

export default App;
