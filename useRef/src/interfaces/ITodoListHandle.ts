import { ITodoItemProps } from './ITodoItemProps';

export interface ITodoListHandle {
  deleteTodoItem: (allTodoItems: ITodoItemProps[]) => ITodoItemProps[];
  toggleTodoItem: (allTodoItems: ITodoItemProps[]) => ITodoItemProps[];
  //   toggleAllTodoItem: (todoItem: ITodoItemProps) => (allTodoItems: ITodoItemProps[]) => ITodoItemProps[];
  selectedTodoItem: ITodoItemProps | undefined;
}
