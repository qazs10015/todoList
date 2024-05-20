import { ITodoItemProps } from './ITodoItemProps';

export interface ITodoProps {
  todoItems: ITodoItemProps[];
  setTodoItems: React.Dispatch<React.SetStateAction<ITodoItemProps[]>>;
}
