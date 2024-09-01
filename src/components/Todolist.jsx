import TodoItem from './TodoItem'
import styles from './todolist.module.css'

function Todolist({item, todos, setTodos}) {

  return <div className={styles.list}>{todos.map((item) =>(
    <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
))}</div>
}

export default Todolist