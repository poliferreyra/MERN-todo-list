import { useEffect, useState } from "react";
import { TodoList } from "./TodoList";

import { Todo } from "../../types/todo";
import { getTodos } from "../../utils/api";

import Container from "../../styles/todoList/Container";
import Title from "../../styles/todoList/Title";
import { InputAddTodo } from "./InputAddTodo";
import axios from "axios";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const allTodos = await getTodos();
        setTodos(allTodos);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchTodos();
  }, []);

  // Agregar nueva tarea
  const addTodo = (newTodo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // toggle true/false - tarea completa
  const toggleComplete = async (id: string) => {
    const todo = todos.find((todo) => todo._id === id);
    if (!todo) return;

    const updatedCompleted = !todo.completed;

    try {
      await axios.put(`http://localhost:4000/api/todos/${id}`, {
        completed: updatedCompleted,
      });

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === id ? { ...todo, completed: updatedCompleted } : todo
        )
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };
  
  // borrar tarea
  const deleteTodo = async (id: string) => {
    console.log("Deleting task with ID:", id);
    try {
      await axios.delete(`http://localhost:4000/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  // editar tarea
  // TODO para mejorar la UI - renderizar un modal para el edit
  const editTodo = async (id: string) => {
    const updatedTask = prompt(
      "Edita tu tarea:",
      todos.find((todo) => todo._id === id)?.task || ""
    );
    if (!updatedTask) return;

    try {
      await axios.put(`http://localhost:4000/api/todos/${id}`, {
        task: updatedTask,
      });

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === id ? { ...todo, task: updatedTask } : todo
        )
      );
    } catch (error) {
      console.error("Error editing todo:", error);
    }
  };

  return (
    <Container>
      <Title>Welcome my TODO List</Title>

      {/* add new task */}
      <InputAddTodo onAddTodo={addTodo} />

      <TodoList
        todos={todos}
        onToggleComplete={toggleComplete}
        onEdit={editTodo}
        onDelete={deleteTodo}
      />
    </Container>
  );
}
