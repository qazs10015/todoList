import { ITodoItemProps } from './ITodoItemProps';

export interface IHeaderProps {
  todoRef: HTMLInputElement | null;
  addNewTodo: (todo: string) => ITodoItemProps;
}
