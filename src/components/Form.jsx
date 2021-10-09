import { useEffect, useState } from "react";

function Form(props) {
  // State
  const [enable, setEnable] = useState(false);
  const [task, setTask] = useState('');

  // Handling Input Change Event
  const handleChange = (event) => {
    const newTask = event.target.value;
    setTask(newTask);
  }

  // Side Effect
  useEffect(() => {
    if (task.length > 2) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }, [task]);

  // Handling Form Submit Event
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAdd(task)
  }

  return (
    <div className="row">
      <div className="col-12">
        <form className="d-flex" onSubmit={handleSubmit}>
          <input type="text" className="form-control" id="inlineFormInputGroupTarea" placeholder="Descripción de la tarea..." onChange={handleChange} value={task} />

          <button type="submit" className="btn btn-primary" disabled={!enable}>Agregar</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
