import React, { useState, useMemo } from "react";
import ReactMemo from "./ReactMemo";
import UseMemo from "./UseMemo";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");

  const addData = (value) => {
    if (value.length > 5) {
      setTodo([...todo, value]);
      setValue("");
    } else {
      alert("Task must be more than 5 characters!");
    }
  };

  return (
    <div>
      <h3>React.useMemo</h3>

      <h3>My Todos</h3>
      <div
        style={{
          borderBottom: "2px solid grey", paddingBottom:"10px",
        }}
      >
        <p>New Todo</p>
        <button onClick={() => addData("New Todo")}>Add Todo</button>
      </div>

      <div
        style={{
          borderBottom: "2px solid grey",
        }}
      >
        <UseMemo />
      </div>

      <div
        style={{
          marginTop:"7px",
          borderTop: "2px solid grey",
        }}
      >
        <h3>React.memo</h3>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Enter a task..."
        />
        <button onClick={() => addData(value)}>Add Task</button>
      </div>

      <ul>
        <ReactMemo todo={todo} />
      </ul>
    </div>
  );
};

export default App;
