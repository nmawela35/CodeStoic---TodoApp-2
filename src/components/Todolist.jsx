import TodoItem from './TodoItem'

function Todolist({todos}) {

  return <div>{todos.map((item) =>(
    <TodoItem key={item} item={item}/>
))}</div>
}

export default Todolist