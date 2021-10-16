import { useHistory } from 'react-router-dom';

function Login () {
  let history = useHistory();

  const handleClick = () => {
    localStorage.setItem('tinto-session', 'jeisson');
    history.push('/');
  }

  return (<div>
    <h1 className="text-white">Hola soy el Log In</h1>
    <button className="btn btn-primary" onClick={handleClick}>Iniciar Sesión</button>
  </div>);
}

export default Login;
