import { useState } from 'react'
import './App.css'
import { ToDoItem } from './components/ToDoItem'

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
  
          <ToDoItem 
          title={todo} 
          key={index}
          delete={deleteTask}
          index={index}
         />
        ))}

      </div>
    </>
  )
}

