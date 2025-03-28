import { useState } from 'react'
import './App.css'

export default function App() {
  const [task, setTask] = useState(['1', '2', '3'])
  const [newTask, setNewTask] = useState("")

  function onChangeInput(event) {
    setNewTask(event.target.value)
  }
  console.log(onChangeInput)

  function addTask() {
    setTask(...task, newTask)
    setNewTask("")
  }

  return (
    <>
      <h1>To-Do List</h1>

      <div>
        <input type="text"
          placeholder='Enter the text'
          value={newTask} 
          onChange={onChangeInput}/>
    
        <button onClick={addTask}>Add</button>
      </div>

      <div>
        {task.map((todo, index) => (
          <p> {task}
            key={index}
            todo={todo}

            {/* <button onClick={deleteTask}>Delete</button> */}
          </p>
        ))}

      </div>
    </>
  )
}

