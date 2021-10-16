import Login from "./pages/Login";
import About from "./pages/About";
import App from "./App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function TintoRouter () {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Aplicación</Link>
        </li>
        <li>
          <Link to="/log-in">Inicio de Sesión</Link>
        </li>
        <li>
          <Link to="/about">Sobre Nosotros</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <App />
        </Route>
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
