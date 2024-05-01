import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleAddTodo = () => {
    setTasks([...tasks, "New todo"]);
    console.log('check1');
  };

  const handleRemoveTask = (index) => {
   const data= tasks.filter((val,id)=>{
     console.log('check4');
      return id !== index;
    })
    setTasks(data)
  };

   const handleIncrement = () => {
    setCounter(counter + 1);
    console.log('check4');
  };

  return (
    <div>
         <h2>React.useMemo</h2>
      <h2>My todos</h2>
      <p>New Todo</p>
      <button id="add-todo-btn" onClick={handleAddTodo}>
        Add todo
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              id={`todo-${index}`}
              onClick={() => handleRemoveTask(index)}
            >
              New Todo
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <p>Count: {counter}
      <button id="increment-btn" onClick={handleIncrement}>+</button>
      </p>
      <h2>Expensive Calculation</h2>
      <p>1000000000</p>
      <hr />
<hr />
    </div>
  )
}

export default UseMemo
