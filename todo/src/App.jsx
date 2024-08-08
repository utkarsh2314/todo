import { useState } from "react";
import React from "react";
import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/todoList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodo(storedTodos);
  }, []);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
    };
    setTodo([newTask, ...todo]);
    localStorage.setItem("todos", JSON.stringify(todo));
    toast.success("New task added.");
    // console.log(todo);
  };

  const deleteTask = (id) => {
    const filteredTodos = todo.filter((item) => item.id !== id);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    toast.success("Task deleted.");
    setTodo(filteredTodos);
  };

  return (
    <>
      <Navbar />
      <TodoForm addTask={addTask} />
      <TodoList todo={todo} deleteTask={deleteTask} />
      <footer>&copy; peace out ;-O</footer>
      <ToastContainer position="top-right" theme="dark" />
    </>
  );
};

export default App;
