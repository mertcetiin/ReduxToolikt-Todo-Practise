import './App.css'
import Todo from './components/Todo'
import { useState } from 'react'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = e.target.name.value
    if (newTodo !== '') {
      setTodos([...todos, newTodo])
    }
    e.target.name.value = ''
  }

  const handleDelete = (index) => {
    const updateDelete = todos.filter((item, id) => id !== index)
    setTodos(updateDelete)
  }

  return (
    <div>
      <Todo handleSubmit={handleSubmit} />
      <TodoList todos={todos} handleDelete={handleDelete} setTodos={setTodos} />
    </div>
  )
}

export default App
