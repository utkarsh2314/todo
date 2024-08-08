import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, deleteTask }) => {
  return (
    <div>
      <section className="todo-list">
        <h1>Todos</h1>
        <div className="container">
          {todo && todo.length > 0 ? (
            todo.map((element) => {
              console.log(todo);
              return (
                <TodoItem
                  deleteTask={deleteTask}
                  element={element}
                  key={element.id}
                />
              );
            })
          ) : (
            <p>You've no tasks todo.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default TodoList;
