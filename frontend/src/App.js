import React from 'react';
import FAQ from './component/faq/FAQ';
import Navbar from './component/header/sub-component/nav-bar/Navbar';
import PromoSell from './component/promo-sell/PromoSell.jsx';
const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <FAQ />
      <PromoSell />
    </div>
  )
}

export default App;
