import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "app/types/todo";

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload; // Guardar todos en el estado
    },

    addNewTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo._id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editExistingTodo: (
      state,
      action: PayloadAction<{ id: string; task: string }>
    ) => {
      const todo = state.todos.find((todo) => todo._id === action.payload.id);
      if (todo) {
        todo.task = action.payload.task; // Actualizar el texto de la tarea
      }
    },
    deleteExistingTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
  },
});

export const {
  setTodos,
  addNewTodo,
  toggleTodo,
  editExistingTodo,
  deleteExistingTodo,
} = todosSlice.actions;
export default todosSlice.reducer;
