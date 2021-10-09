import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import Filters from './components/Filters';
import { useState } from 'react';

const myTitle = 'Tinto Tareas';

let initialTask = [
  { description: 'Lavar la Ropa', status: 'completed' }, // task 1
  { description: 'Comprar comida', status: 'pending' }, // task 2
  { description: 'Estudiar', status: 'pending' }, // task 3
  { description: 'Cenar', status: 'pending' }, // task 4
]

function App() {
  const [ tasks, setTasks ] = useState(initialTask);

  /*
    Agregar una nueva tarea a mi lista de tareas.
    newTask => Contiene la nueva tarea.
  */
  const addTask = (newTask) => {
    const updatedTasks = [...tasks];

    updatedTasks.push({
      description: newTask,
      status: 'pending'
    })
    //Actualizamos el task con el valor del clon
    setTasks(updatedTasks)
  }

  const deleteTask = (taskIndex) =>{
    const updatedTasks = [...tasks];

    updatedTasks.splice(taskIndex, 1)

    //Actualizamos el task con el valor del clon
    setTasks(updatedTasks)
  }

  return (
    <div className="contenedor-principal">
      <div className="container-fluid">
        {/* F1 - Titulo */}
        <Title title={myTitle} />

        {/* F2 - Formulario */}
        <Form onAdd={addTask} />

        {/* F3 - Lista de Tareas */}
        <List allTasks={tasks} onDelete={deleteTask}  />

        {/* F4 - Filtros */}
        <Filters />
      </div>
    </div>
  );
}

export default App;
