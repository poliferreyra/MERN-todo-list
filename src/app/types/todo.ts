// Definición de la interfaz 'Todo'
interface Todo {
    id: string;
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
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
  }