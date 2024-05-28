export interface IActionProps {
  count: number;
  clearCompleted: () => void;
  filterTodoItems: (filter: 'all' | 'active' | 'completed') => void;
}
