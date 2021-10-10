import React from 'react';
import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';
const PrivateForm = ({ children, ...rest }) => {
  const email = useSelector((state) => state.auth.merchantdetails.email)  
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

export default PrivateForm;