import React, {useState} from "react";
import TodoList from "./Todo/TodoList";

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

  return (
    <div className="wrapper">
      <h1>React</h1>
      <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
  );
}

export default App;
