"use client";
import { useEffect } from "react";

// redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store/store";
import {
  setTodos,
  toggleTodo,
  editExistingTodo,
  deleteExistingTodo,
} from "../../redux/store/todoSlice";

// api
import {
  deleteTodo,
  editTodo,
  getTodos,
  setRequestConfig,
  toggleComplete,
} from "app/utils/api";

// Styles
import { MainContainer } from "app/styles/todoList/MainContainer";
import Container from "app/styles/todoList/Container";
import Title from "app/styles/todoList/Title";

// components
import { TodoList } from "./TodoList";
import { InputAddTodo } from "./InputAddTodo";

export default function Main(tokenParameter: { token: string }) {
  const dispatch = useDispatch();
  const { todos } = useSelector((state: RootState) => state.todos);

  setRequestConfig({
    headers: { Authorization: `Bearer ${tokenParameter.token}` },
  });

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todosData = await getTodos();
        dispatch(setTodos(todosData));
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [dispatch]);

  // toggle task completed
  const handleToggleComplete = (id: string) => {
    dispatch(toggleTodo(id));

    const taskCompleted = todos.find((todo) => todo._id === id)
      ?.completed as boolean;

    toggleComplete(id, taskCompleted);
  };

  // edit task
  const handleEditTodo = (id: string) => {
    const updatedTask = prompt(
      "Edita tu tarea:",
      todos.find((todo) => todo._id === id)?.task
    );

    if (updatedTask == null) return;

    dispatch(editExistingTodo({ id: id, task: updatedTask }));

    editTodo(id, updatedTask);
  };

  // delete task
  const handleDeleteTodo = (id: string) => {
    dispatch(deleteExistingTodo(id));

    deleteTodo(id);
  };

  return (
    <MainContainer>
      <Container>
        <Title>My Todo List</Title>
        <InputAddTodo />
        <TodoList
          todos={todos}
          onToggleComplete={handleToggleComplete}
          onEdit={handleEditTodo}
          onDelete={handleDeleteTodo}
        />
      </Container>
    </MainContainer>
  );
}
