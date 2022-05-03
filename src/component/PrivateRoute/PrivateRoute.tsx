import { routePath } from "@constant";
import { useAuth } from "@hook";
import { RouteProps, Route, Redirect } from "react-router-dom";

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { pending, isLoggedIn } = useAuth();

  if (pending) {
    return null;
  }

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: routePath.ADMIN.LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
