import React, { useState } from "react";

const ReactMemo = () => {
  
  const [customTask, setCustomTask] = useState(''); 
  const [skills, setaSkills] = useState([]);
   const handleCustomTaskChange = (e) => {
    setCustomTask(e.target.value);
    console.log('check2');
  }; 

    const handleCustomTaskSubmit = () => {
    if (customTask.length > 5) {
      setaSkills([...skills, customTask]);
      setCustomTask('');
      console.log('check3');
    } else {
      alert('Task must be more than 5 characters long.');
    }
  };
  return (
    <div>
      <h2>React.memo</h2>
      <input
        id="skill-input"
        type="text"
        value={customTask}
        onChange={handleCustomTaskChange}
        placeholder="Enter custom task"
      />
      <button onClick={handleCustomTaskSubmit} id="skill-btn">
        Add Skill
      </button>

      <div id="item-jumbotron">
        {skills.map((task, index) => (
          <div key={index}>{task}</div>
        ))}
      </div>
    </div>
  );
};

export default ReactMemo;
