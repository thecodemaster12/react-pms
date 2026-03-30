import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect (() => {
    axios.get('http://localhost:3000/tasks')
    .then((res) => {
      setTasks(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  },[])
  return (
    <main>
      <div className="container mx-auto">
        <div>Tasks: {tasks.length}</div>
        {tasks.map((task) => (
          <h2 key={task.id}>{task.text}</h2>
        ))}
      </div>
    </main>
  )
}

export default Tasks