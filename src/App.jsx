import './App.css'
import Todo from './components/Todo'
import { useState } from 'react'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, e.target.name.value])
    e.target.name.value = ''
  }

  return (
    <div>
      <Todo handleSubmit={handleSubmit} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
