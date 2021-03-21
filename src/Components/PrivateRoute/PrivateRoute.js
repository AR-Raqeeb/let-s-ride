import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
    const [isLoggedIn, setIsLoggedIn] = useContext(UserContext);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isLoggedIn.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;