import { useState } from "react"

function Form({todos,setTodos}) {
  const [todo,setTodo] = useState("")
    
    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos,todo])
        setTodo("")
        }

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <input type="text" onChange={(e) =>setTodo(e.target.value)} placeholder="Enter Todo item..." value={todo} />
      <button type="submit">Add</button>
      </div>

  </form>
  )
}

export default Form