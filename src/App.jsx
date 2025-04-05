import { useState } from 'react'
import './App.css'

export default function App() {
  const [task, setTask] = useState([])
  const [newTask, setNewTask] = useState("")

  function onChangeInput(event) {
    setNewTask(event.target.value)
  }

  function addTask() {
    if (newTask !== "") {
      setTask([...task, newTask])
      setNewTask("")
    }

  }

  function editTask() {
    const editText = [...newTask]
    console.log(editText)
  }

  function deleteTask(idx) {
    const reduceToDo = [...task];
    reduceToDo.splice(idx, 1)
    setTask(reduceToDo)
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

      <div >
        {task.map((todo, index) => (
          <div
            className='todo-container'
            key={index}>
            <p> {todo} </p>
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))}

      </div>
    </>
  )
}

