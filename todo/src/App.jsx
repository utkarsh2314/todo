import { useState } from "react";
import React from "react";
import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/todoList";

const [todo, setTodo] = useState([]);

function App() {
  return (
    <>
      <Navbar />
      <TodoForm />
      <TodoList />
      <footer>&copy; peace out ;-O</footer>
    </>
  );
}

export default App;
