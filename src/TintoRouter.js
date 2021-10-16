import Login from "./pages/Login";
import About from "./pages/About";
import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Menu from "./components/Menu";

function TintoRouter () {
  return (
    <Router>
      <Menu />

      <Switch>
        <PrivateRoute exact path="/" >
          <App />
        </PrivateRoute>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/log-in">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
// function TintoRouter () {
//   if (window.location.pathname === '/log-in') {
//     return <Login />
//   } else if (window.location.pathname === '/about') {
//     return <About />
//   } else {
//     return <App />
//   }
// }

export default TintoRouter;
