import { useState } from 'react'

import './App.css'

function App() {
  const [task, setTask] = useState('go to sleep')

  return (
    <>
      <div>
      <p>To-Do List</p>
      <input type="text" placeholder='Enter the text' />
      <button onClick={'dsf'}>Add</button>
      </div>
    </>
  )
}

export default App
