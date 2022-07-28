import React, {useState} from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";

const App = () => {

  const [todos, setTodos] = useState([
    {id: 1, completed: false, title: "Купить хлеб"},
    {id: 2, completed: false, title: "Купить масло"},
    {id: 3, completed: false, title: "Купить молоко"},
  ])

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

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
      <div className="wrapper">
        <h1>React</h1>
        {
          todos.length ? (
            <TodoList todos={todos} onToggle={toggleTodo}/>
          ) : (
            <p>Нет дел.</p>
          )
        }
        
      </div>
    </Context.Provider>
  );
}

export default App;
