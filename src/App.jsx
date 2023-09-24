import './App.css'
import Todo from './components/Todo'
import TodoList from './components/TodoList'

function App() {

  // const handleDelete = (index) => {
  //   const updateDelete = todos.filter((item, id) => id !== index)
  //   setTodos(updateDelete)
  // }

  return (
    <div>
      <Todo />
      <TodoList />
    </div>
  )
}

export default App
