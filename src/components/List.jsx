let tasks = [
  { description: 'Lavar la Ropa', status: 'completed' }, // task 1
  { description: 'Comprar comida', status: 'pending' }, // task 2
  { description: 'Estudiar', status: 'pending' }, // task 3
  { description: 'Cenar', status: 'pending' }, // task 4
]

function List() {
  return (
    <div className="row">
      <div className="col-12">
        <table className="table lista-tareas">
          <tbody>
            {tasks.map( (task) => {
              return (
                <tr>
                  <td>
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td>
                    <h4 className="text-primary mb-0">{task.description}</h4>
                    <span className="text-muted">{task.status}</span>
                  </td>
                  <td className="text-end">
                    <button className="btn btn-link" title="Eliminar">
                      <span className="material-icons text-danger">
                        delete
                      </span>
                    </button>
                  </td>
                </tr>
              );
            } )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;