import { useState } from 'react'

export const ToDoItem = (props) => {
 const [editTodo, setEditTodo] = useState(false)
 const [inputValue, setInputValue] = useState(props.title)
    
 function onChangeInput(event) {
    setInputValue(event.target.value)
  }

    return(

        
        <div className='todo-container'>
        {
            editTodo ? <input value={inputValue} onChange={onChangeInput}/> : <div> {props.title} </div>
        }
        {
            editTodo ? <button onClick={(props.index, inputValue)}>Save</button> : (<button onClick={() => setEditTodo(true)}>Edit</button>)
        }
      
        <button onClick={() => props.delete(props.index)}>Delete</button>
      </div>
    )
}