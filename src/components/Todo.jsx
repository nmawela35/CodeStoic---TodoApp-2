import { useState } from 'react'
import Form from './Form'
import Todolist from './Todolist'


function Todo() {
  const [todos,setTodos] =useState([])

  return (
    <div>
      <Form todo={todos} setTodos={setTodos} />
      <Todolist todos={todos}/>
    </div>
  )
}

export default Todo