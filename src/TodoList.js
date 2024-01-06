import Todo from "./Todo";

const TodoList = ({todos, toggleToDoArrayItem}) => {
return (
    todos.map(todo => {
        return <Todo key={todo.id} toggleTodo={toggleToDoArrayItem} todo={todo}/>
    })
    )
}

export default TodoList;