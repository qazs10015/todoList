import { ITodoItemProps } from './ITodoItemProps';

export interface IMainProps {
  toggleCompleted: (id: string) => void;
  deleteTodoItem: (id: string) => void;
  toggleAll: () => void;
  changeWritable: (id: string) => void;
  updateTodoItem: (id: string, title: string) => void;
  todoItems: ITodoItemProps[];
}
