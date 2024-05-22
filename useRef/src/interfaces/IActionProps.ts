import { Dispatch } from 'react';
import { TodoItemStatus } from '../types/TodoItemStatus';
import { ITodoProps } from './ITodoProps';

export interface IActionProps extends Pick<ITodoProps, 'setTodoItems'> {
  todoItemCount: number;
  setTodoItemEvent: Dispatch<React.SetStateAction<TodoItemStatus>>;
}
