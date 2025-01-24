// Definition of the 'Todo' interface
export interface Todo {
  _id: string;
  task: string;
  completed: boolean;
}

// Props for the TodoItem component
export interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

// Props for the TodoList component
export interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: string) => void;
  onEdit: (id: string, task: string) => void;
  onDelete: (id: string) => void;
}

export interface InputAddTodoProps {
  onAddTodo: (newTodo: Todo) => void; // Prop for adding a task
}
