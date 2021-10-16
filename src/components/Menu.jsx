import { Link, useHistory } from 'react-router-dom';

function Menu () {
  let history = useHistory();

  const handleClick = () => {
    localStorage.removeItem('tinto-session');
    history.push('/log-in');
  }

  return (<ul>
    <li>
      <Link to="/">Aplicación</Link>
    </li>
    <li>
      <Link to="/log-in">Inicio de Sesión</Link>
    </li>
    <li>
      <Link to="/about">Sobre Nosotros</Link>
    </li>
    <li>
      <button onClick={handleClick} className="btn btn-link text-warning">Cerrar Sesión</button>
    </li>
  </ul>);
}

export default Menu;
