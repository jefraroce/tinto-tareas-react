import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import Title from './components/Title';
import Form from './components/Form';
import List from './components/List';
import Filters from './components/Filters';
import { useState } from 'react';

const myTitle = 'Tinto Tareas';

let initialTask = JSON.parse(localStorage.getItem('tasksTintoCode'))
if(!initialTask){
  initialTask = []
}

function App() {
  const [tasks, setTasks] = useState(initialTask);

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
    localStorage.setItem('tasksTintoCode', JSON.stringify(updatedTasks))
    setTasks(updatedTasks)
  }

  const deleteTask = (taskIndex) => {
    const updatedTasks = [...tasks];

    updatedTasks.splice(taskIndex, 1)

    //Actualizamos el task con el valor del clon
    localStorage.setItem('tasksTintoCode', JSON.stringify(updatedTasks))
    setTasks(updatedTasks)
  }

  /*const showPendingTask = () => {
    const allTasks = JSON.parse(localStorage.getItem('tasksTintoCode'))
    setTasks(allTasks) //Actualizamos las tareas por medio del escuchador.

    const updatedTasks = [...allTasks] //Clonamos el arreglo para trabajar con él.
    const filterTask = updatedTasks.filter( task => task.status === 'pending' )
    setTasks(filterTask)
  }

  const showCompletedTask = () => {
    const allTasks = JSON.parse(localStorage.getItem('tasksTintoCode'))
    setTasks(allTasks) //Actualizamos las tareas por medio del escuchador.

    const updatedTasks = [...allTasks] //Clonamos el arreglo para trabajar con él.
    const filterTask = updatedTasks.filter( task => task.status === 'completed' )
    setTasks(filterTask)
  }*/


  const filterTask = (status) => {
    const allTasks = JSON.parse(localStorage.getItem('tasksTintoCode'))
    setTasks(allTasks) //Actualizamos las tareas por medio del escuchador.

    const updatedTasks = [...allTasks] //Clonamos el arreglo para trabajar con él.
    const filterTask = updatedTasks.filter(task => task.status === status)
    setTasks(filterTask)
  }

  const showAllTask = () => {
    const allTasks = JSON.parse(localStorage.getItem('tasksTintoCode'))
    setTasks(allTasks) //Actualizamos las tareas por medio del escuchador.

    /*const updatedTasks = [...allTasks]
    const filterTask = updatedTasks.filter( task => (task.status === 'completed' || task.status === 'pending') )
    setTasks(filterTask)*/
  }

  const setStatus = (taskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].status = updatedTasks[taskIndex].status === 'completed' ? 'pending' : 'completed';
    //Actualizamos el task con el valor del clon
    localStorage.setItem('tasksTintoCode', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  }

  return (
    <div className="contenedor-principal">
      <div className="container-fluid">
        {/* F1 - Titulo */}
        <Title title={myTitle} />

        {/* F2 - Formulario */}
        <Form onAdd={addTask} />

        {/* F3 - Lista de Tareas */}
        <List allTasks={tasks} onDelete={deleteTask} setStatus={setStatus} />

        {/* F4 - Filtros */}
        <Filters filter={filterTask} filterAll={showAllTask} />
      </div>
    </div>
  );
}

export default App;
