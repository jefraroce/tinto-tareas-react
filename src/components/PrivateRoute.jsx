import { Route, Redirect } from "react-router-dom";

function PrivateRoute (props) {
  const authenticated = localStorage.getItem('tinto-session');

  if (authenticated) {
    return (
      <Route exact={true} path={props.path}>
        {props.children}
      </Route>
    );
  } else {
    return <Redirect to="/log-in" />;
  }
}

export default PrivateRoute;
