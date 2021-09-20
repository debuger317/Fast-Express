import React from 'react';
import Navbar from './component/header/sub-component/nav-bar/Navbar';
import Support from './component/support/Support';
import Review from './component/reviews/Review.jsx';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Support/>
      <Review/>
    </div>
  )
}

export default App;
