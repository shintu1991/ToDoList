import './App.css';
import TodoList from './TodoList';
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [toDoArray, setToDoArray] = useState([]);
  const toDoNameRef = useRef();

  function toggleToDoArrayItem(id) {
    const newToDoArray = [...toDoArray]
    const todoTask = newToDoArray.find(todo => todo.id === id)
    todoTask.complete = !todoTask.complete
    setToDoArray(newToDoArray);
  }

  function handleAddTodo() {
    const name = toDoNameRef.current.value;
    if (name === '') return
    setToDoArray(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    toDoNameRef.current.value = null;
  }

  const handleClearTodo = () => {
    const newTodos = toDoArray.filter(todo => !todo.complete)
    setToDoArray(newTodos);
  }

  return (
    <div className="App">
      <TodoList todos={toDoArray} toggleToDoArrayItem={toggleToDoArrayItem} />
      <input ref={toDoNameRef} />
      <button onClick={handleAddTodo}>Add TodoList</button>
      <button onClick={handleClearTodo}>Clear Complete</button>
      <p>{toDoArray.filter(todo => !todo.complete).length} left to do</p>
    </div>
  );
}

export default App;
