"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TodoItem = styled.li<{ completed: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.completed ? "#d4edda" : "white")};
`;

const TodoText = styled.span<{ completed: boolean }>`
  flex: 1;
  margin: 0 10px;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

export default function Home() {
  const [todos, setTodos] = useState<{ id: number; task: string; completed: boolean }[]>([
    { id: 1, task: "Aprender React", completed: false },
    { id: 2, task: "Explorar Node.js", completed: true },
    { id: 3, task: "Practicar TypeScript", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTodo = () => {
    if (!newTask.trim()) return;
    setTodos([...todos, { id: Date.now(), task: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number) => {
    const updatedTask = prompt("Edita tu tarea:", todos.find((todo) => todo.id === id)?.task || "");
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
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} completed={todo.completed}>
            <TodoText completed={todo.completed}>{todo.task}</TodoText>
            <FaCheck
              onClick={() => toggleComplete(todo.id)}
              style={{ color: "green", cursor: "pointer", marginRight: "10px" }}
            />
            <FaEdit
              onClick={() => editTodo(todo.id)}
              style={{ color: "blue", cursor: "pointer", marginRight: "10px" }}
            />
            <FaTrash
              onClick={() => deleteTodo(todo.id)}
              style={{ color: "red", cursor: "pointer" }}
            />
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
}
