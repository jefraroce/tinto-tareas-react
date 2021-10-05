import { useEffect, useState } from "react";

function Form() {
  // State
  const [enable, setEnable] = useState(false); // 1
  const [task, setTask] = useState(''); // 2

  // Handling Events
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(task);
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
