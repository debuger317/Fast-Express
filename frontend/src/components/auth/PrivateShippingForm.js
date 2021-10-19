import React from 'react';
import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';
const PrivateShippingForm = ({ children, ...rest }) => {
  const email = useSelector((state) => state.auth.authdetails.email)  

    return (
        <Route
        {...rest}
        render={({ location }) =>
        email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/signup",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateShippingForm;