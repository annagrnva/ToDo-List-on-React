import { useState } from 'react'
import './App.css'

export default function App() {
  const [task, setTask] = useState([])
  const [newTask, setNewTask] = useState("")

  function onChangeInput(event) {
    setNewTask(event.target.value)
  }

  function addTask() {
    const newIndex = task.indexOf(1);
    if(newIndex > -1) {
      task.splice(newIndex, 1)
      }
    setTask([...task, newTask])
    setNewTask("")
  }

  function deleteTask(index) {
   const updateDelete = task.filter((t) => t.index !== index)
   console.log(updateDelete)
   setTask(updateDelete)
  }

  return (
    <>
      <div>
        <h1>To-Do List</h1>

        <input
          type="text"
          placeholder='Enter the text'
          value={newTask}
          onChange={onChangeInput}
        />

        <button onClick={addTask}>Add</button>

      </div>

      <div>
        {task.map((todo, index) => (
          <div key={index}>
            <p> {todo} </p>
            <button onClick={() => deleteTask(todo.index)}>Delete</button>
          </div>
        ))}

      </div>
    </>
  )
}

