import { Dispatch, SetStateAction } from 'react';
import { ITodoItemProps } from './ITodoItemProps';

export interface ITodoProps {
  todoItems: ITodoItemProps[];

  changeTodoItemStatus: Dispatch<SetStateAction<ITodoItemProps[]>>;
  setTodoItems: React.Dispatch<React.SetStateAction<ITodoItemProps[]>>
}
