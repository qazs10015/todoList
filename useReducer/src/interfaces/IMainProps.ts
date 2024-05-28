import { ITodoItemProps } from './ITodoItemProps';

export interface IMainProps {
  toggleCompleted: (id: string) => void;
  deleteTodoItem: (id: string) => void;
  toggleAll: () => void;
  todoItems: ITodoItemProps[];
}
