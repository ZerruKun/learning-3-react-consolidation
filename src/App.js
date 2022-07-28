import React, {useState, useEffect} from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
import Loader from "./Loader";

const App = () => {

  const [todos, setTodos] = useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 2000)
      })
  }, [])

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed 
      }
      return todo
    })
    )
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => {return todo.id !== id}))
  }

  const addTodo = (title) => {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className="wrapper">
        <h1>React</h1>
        <AddTodo onCreate={addTodo}/>
        {loading && <Loader />}
        {
          todos.length ? (
            <TodoList todos={todos} onToggle={toggleTodo}/>
          ) : loading ? null : (
            <p>Нет дел.</p>
          )
        }
        
      </div>
    </Context.Provider>
  );
}

export default App;
