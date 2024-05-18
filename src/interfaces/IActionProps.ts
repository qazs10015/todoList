import { Dispatch } from 'react';
import { TodoItemStatus } from '../types/TodoItemStatus';

export interface IActionProps {
  todoItemCount: number;
  setTodoItemEvent: Dispatch<React.SetStateAction<TodoItemStatus>>;
}
