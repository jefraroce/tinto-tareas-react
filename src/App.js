import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const titulo = 'Tinto Tareas';

function App() {
  return (
    <div className="contenedor-principal">
      <div className="container-fluid">
        {/* F1 - Titulo */}
        <div className="row">
          <div className="col-12">
            <h1 className="text-primary text-center">{titulo}</h1>
          </div>
        </div>

        {/* F2 - Formulario */}
        <div className="row">
          <div className="col-12">
            <form className="d-flex">
              <input type="text" className="form-control" id="inlineFormInputGroupTarea" placeholder="Descripción de la tarea..." />

              <button type="submit" className="btn btn-primary">Agregar</button>
            </form>
          </div>
        </div>

        {/* F3 - Lista de Tareas */}
        <div className="row">
          <div className="col-12">
            <table className="table lista-tareas">
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td>
                    <h4 className="text-primary mb-0">Tarea</h4>
                    <span className="text-muted">Completado</span>
                  </td>
                  <td className="text-end">
                    <button className="btn btn-link" title="Eliminar">
                      <span className="material-icons text-danger">
                        delete
                      </span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td>
                    <h4 className="text-primary mb-0">Tarea</h4>
                    <span className="text-muted">Completado</span>
                  </td>
                  <td className="text-end">
                    <button className="btn btn-link" title="Eliminar">
                      <span className="material-icons text-danger">
                        delete
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

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
