import { useState } from "react"
import styles from './form.module.css'

function Form({todos,setTodos}) {
  const [todo,setTodo] = useState("")
    
    function handleSubmit(e){
        e.preventDefault()
        setTodos([...todos,todo])
        setTodo("")
        }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
      <input className={styles.modernInput}  type="text" onChange={(e) =>setTodo(e.target.value)} placeholder="Enter Todo item..." value={todo} />
      <button className={styles.modernButton} type="submit">Add</button>
      </div>
  </form>
  )
}

export default Form