import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import API from '../api';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [authenticated, setAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        await API.get('/auth/protected');
        setAuthenticated(true);
      } catch (err) {
        setAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoute;
