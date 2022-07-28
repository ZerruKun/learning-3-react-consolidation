import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const styles = {
    ul: {
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
  };

  return (
    <ul style={styles.ul}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
    </ul>
  );
};

export default TodoList;