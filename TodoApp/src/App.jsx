import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoCreate from './components/ToDoCreate'
import ToDoList from './components/ToDoList'

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)])
    console.log(extractedArray)
  }

  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo
      }
      return newTodo
    })
    setTodos([...updatedTodos])
  }


  console.log(todos)


  return (
    <div className='App'>
      <div className='main'>
        <ToDoCreate onCreateTodo={createTodo} />
        <ToDoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>
    </div>
  )
}

export default App
