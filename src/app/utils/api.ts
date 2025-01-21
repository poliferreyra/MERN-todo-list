import { TodoInput } from "app/frontend/components/InputAddTodo";
// import { Todo } from "app/types/todo";
import axios, { AxiosRequestConfig } from "axios";

let requestConfig: AxiosRequestConfig;

export const setRequestConfig = (parameters: AxiosRequestConfig) => {
  requestConfig = parameters;
};

export const getTodos = async () => {
  try {
    const response = await axios.get(
      "http://localhost:4000/api/todos",
      requestConfig
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

// add todo
export const addTodo = async (todo: TodoInput) => {
  try {
    await axios.post("http://localhost:4000/api/todos", todo, requestConfig);
  } catch (error) {
    console.error("Error to add news task", error);
  }
};

// toggle true/false for tasks
export const toggleComplete = async (id: string, completed: boolean) => {
  try {
    await axios.put(
      `http://localhost:4000/api/todos/${id}`,
      {
        completed: completed,
      },
      requestConfig
    );
  } catch (error) {
    console.error("Error updating todo:", error);
  }
};

// editar tarea
// TODO para mejorar la UI - renderizar un modal para el edit
export const editTodo = async (id: string, task: string) => {
  try {
    await axios.put(
      `http://localhost:4000/api/todos/${id}`,
      {
        task: task,
      },
      requestConfig
    );
  } catch (error) {
    console.error("Error editing todo:", error);
  }
};

// borrar tarea
export const deleteTodo = async (id: string) => {
  try {
    await axios.delete(`http://localhost:4000/api/todos/${id}`, requestConfig);
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};
