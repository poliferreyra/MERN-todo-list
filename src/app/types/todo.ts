// Definición de la interfaz 'Todo'
export interface Todo {
  _id: string;
  task: string;
  completed: boolean;
}

// Props para el componente TodoItem
export interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

// Props para el componente TodoList
export interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: string) => void;
  onEdit: (id: string, task: string) => void;
  onDelete: (id: string) => void;
}

export interface InputAddTodoProps {
  onAddTodo: (newTodo: Todo) => void; // Prop para agregar la tarea
}
