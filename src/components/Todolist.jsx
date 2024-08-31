import TodoItem from './TodoItem'
import styles from './todolist.module.css'

function Todolist({todos}) {

  return <div className={styles.list}>{todos.map((item) =>(
    <TodoItem key={item} item={item}/>
))}</div>
}

export default Todolist