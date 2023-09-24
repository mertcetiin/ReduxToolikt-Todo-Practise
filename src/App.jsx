import './App.css'
import Todo from './components/Todo'
import TodoList from './components/TodoList'
import { useSelector } from 'react-redux'


function App() {

  // const [todos, setTodos] = useState([])
  const { todos } = useSelector(state => state.todo)


  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const newTodo = e.target.name.value
  //   if (newTodo !== '') {
  //     setTodos([...todos, newTodo])
  //   }
  //   e.target.name.value = ''
  // }

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
