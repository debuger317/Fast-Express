import React, { Fragment } from 'react';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './router/Routes';

const App = () => {
  return (
    <Fragment>
      <ScrollToTop/>
      <AppRoutes />
    </Fragment>
  )
}
export default App;