import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";
const App = () => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "sdadsd",
  ]);
  const addSkills = () => {
    if (skill.length > 5) {
      setSkills((t) => [...t, skill]);
    } else {
      alert("Task need to be more then 5 character");
    }
  };
  return (
    <div>
      <UseMemo />
      <h2>React.memo</h2>
      <input type="text" onChange={(e) => setSkill(e.target.value)} />
      <button onClick={addSkills}>Add Skill</button>
      <ReactMemo skills={skills} />
    </div>
  );
};

export default App;
