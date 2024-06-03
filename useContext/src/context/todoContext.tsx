import { ReactNode, createContext, useState } from 'react';
import { ITodoItemProps } from '../interfaces/ITodoItemProps';

interface ContextProviderProps {
  todoItems: ITodoItemProps[];
  addNewTodo: (newTodo: string) => void;
  toggleCompleted: (id: string) => void;
  deleteTodoItem: (id: string) => void;
  toggleAll: () => void;
  changeWritable: (id: string) => void;
  updateTodoItem: (id: string, title: string) => void;
  clearCompleted: () => void;
  setFilter: (filter: 'All' | 'Active' | 'Completed') => void;
}

export const TodoAppContext = createContext<ContextProviderProps | undefined>(undefined);

export function TodoAppContextProvider(allProps: { children: ReactNode }) {
  const [todoItems, setTodoItems] = useState<ITodoItemProps[]>([]);
  const [filter, setFilterState] = useState<'All' | 'Active' | 'Completed'>('All');

  const addNewTodo = (newTodo: string) => {
    const newTodoItem: ITodoItemProps = { id: Date.now().toString(), title: newTodo, completed: false, writable: false };
    setTodoItems([...todoItems, newTodoItem]);
  };

  const toggleCompleted = (id: string) => {
    setTodoItems(todoItems.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)));
  };

  const deleteTodoItem = (id: string) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  const toggleAll = () => {
    const allCompleted = todoItems.every((item) => item.completed);
    setTodoItems(todoItems.map((item) => ({ ...item, completed: !allCompleted })));
  };

  const changeWritable = (id: string) => {
    // Implement the functionality if required
  };

  const updateTodoItem = (id: string, title: string) => {
    setTodoItems(todoItems.map((item) => (item.id === id ? { ...item, title } : item)));
  };

  const clearCompleted = () => {
    setTodoItems(todoItems.filter((item) => !item.completed));
  };

  const setFilter = (filter: 'All' | 'Active' | 'Completed') => {
    setFilterState(filter);
  };

  const props = {
    todoItems,
    addNewTodo,
    toggleCompleted,
    deleteTodoItem,
    toggleAll,
    changeWritable,
    updateTodoItem,
    clearCompleted,
    setFilter,
  };

  return <TodoAppContext.Provider value={props}>{allProps.children}</TodoAppContext.Provider>;
};
