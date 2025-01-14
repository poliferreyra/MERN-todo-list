import { useState } from "react";
import { TodoList } from "./TodoList";

import Container from "../../styles/Container";
import Title from "../../styles/Title";
import InputContainer from "../../styles/InputContainer";
import Input from "../../styles/Input";
import Button from "../../styles/Button";

export default function Home() {
  const [todos, setTodos] = useState([
    { id: "1", task: "Aprender React", completed: false },
    { id: "2", task: "Explorar Node.js", completed: true },
    { id: "3", task: "Practicar TypeScript", completed: false },
    { id: "4", task: "Practicar Ingles", completed: false },

  ]);

  const [newTask, setNewTask] = useState("");

  const addTodo = () => {
    if (!newTask.trim()) return;
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), task: newTask.trim(), completed: false },
    ]);
    setNewTask("");
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string) => {
    const updatedTask = prompt(
      "Edita tu tarea:",
      todos.find((todo) => todo.id === id)?.task || ""
    );
    if (updatedTask) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, task: updatedTask } : todo
        )
      );
    }
  };

  return (
    <Container>
      <Title>Todo List</Title>
      <InputContainer>
        <Input
          type="text"
          placeholder="Nueva tarea..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button onClick={addTodo}>Agregar</Button>
      </InputContainer>
      <TodoList
        todos={todos}
        onToggleComplete={toggleComplete}
        onEdit={editTodo}
        onDelete={deleteTodo}
      />
    </Container>
  );
}
