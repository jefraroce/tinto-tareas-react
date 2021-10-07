import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';

const myTitle = 'Tinto Tareas';

function App() {
  return (
    <div className="contenedor-principal">
      <div className="container-fluid">
        {/* F1 - Titulo */}
        <Title title={myTitle} />

        {/* F2 - Formulario */}
        <Form />

        {/* F3 - Lista de Tareas */}
        <List />

        {/* F4 - Filtros */}
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div>
              <button className="btn btn-primary btn-sm me-1">Todas</button>
              <button className="btn btn-outline-primary btn-sm me-1">Pendientes</button>
              <button className="btn btn-outline-primary btn-sm">Completadas</button>
            </div>

            <button className="btn btn-link btn-sm">
              <span className="material-icons">
                clear
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
