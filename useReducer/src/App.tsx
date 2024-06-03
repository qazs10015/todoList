import React, { useReducer } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { ITodoItemProps } from './interfaces/ITodoItemProps';
import Action from './components/Action';

interface ITodoState {
  todoItems: ITodoItemProps[];
}

const initialState = { todoItems: [], } as ITodoState;

/** 定義 各種動作
 * 動作：addNewTodo、toggleAll、toggleCompleted、deleteTodoItem、clearCompleted、updateTodoItem、changeWritable
 */
type ActionType =
  { type: 'addNewTodo', payload: string } |
  { type: 'toggleAll' } |
  { type: 'toggleCompleted'; payload: string } |
  { type: 'deleteTodoItem'; payload: string } |
  { type: 'clearCompleted' } |
  { type: 'updateTodoItem'; payload: { id: string, title: string } } |
  { type: 'changeWritable'; payload: string }

function reducer(state: ITodoState, action: ActionType) {
  // 用於操作新增、刪除
  let todoItems = state.todoItems;
  switch (action.type) {
    case 'addNewTodo':
      todoItems = [...state.todoItems, { id: window.crypto.randomUUID(), title: action.payload, completed: false, writable: false } as ITodoItemProps]
      return { todoItems, };
    case 'toggleCompleted':
      todoItems = state.todoItems.map((item) => item.id === action.payload ? { ...item, completed: !item.completed } : item);
      return { todoItems, };
    case 'deleteTodoItem':
      todoItems = state.todoItems.filter(item => item.id !== action.payload)
      return { todoItems, };
    case 'toggleAll':
      todoItems = state.todoItems.map(item => ({ ...item, completed: !item.completed }));
      return { todoItems, };
    case 'clearCompleted':
      todoItems = state.todoItems.filter(item => !item.completed);
      return { todoItems, };
    case 'changeWritable':
      todoItems = state.todoItems.map((item) => item.id === action.payload ? { ...item, writable: !item.writable } : item);
      return { todoItems, };
    case 'updateTodoItem':
      todoItems = state.todoItems.map((item) => item.id === action.payload.id ? { ...item, title: action.payload.title, writable: false } : item);
      return { todoItems, };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // 設定過濾器
  const [filter, setFilter] = React.useState<'All' | 'Active' | 'Completed'>('All');

  const addNewTodo = (todo: string) => {
    return dispatch({
      type: 'addNewTodo',
      payload: todo,
    });
  }

  const toggleCompleted = (id: string) => {
    return dispatch({
      type: 'toggleCompleted',
      payload: id,
    });
  }

  const toggleAll = () => {
    return dispatch({
      type: 'toggleAll',
    });
  }

  const deleteTodoItem = (id: string) => {
    return dispatch({
      type: 'deleteTodoItem',
      payload: id,
    });
  }

  const clearCompleted = () => {
    return dispatch({
      type: 'clearCompleted',
    });
  }

  const updateTodoItem = (id: string, title: string) => {
    return dispatch({
      type: 'updateTodoItem',
      payload: { id, title },
    });
  }

  const changeWritable = (id: string) => {
    return dispatch({
      type: 'changeWritable',
      payload: id,
    });
  }

  const filteredTodos = state.todoItems.filter(todo => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  const todoListProps = {
    changeWritable,
    updateTodoItem,
    todoItems: filteredTodos || [],
    toggleCompleted,
    deleteTodoItem,
    toggleAll
  };

  const actionProps = {
    count: filteredTodos?.length || 0,
    clearCompleted,
    setFilter
  };

  return (
    <>
      <section className="todoapp">
        <Header addNewTodo={addNewTodo} toggleAll={toggleAll}></Header>

        <TodoList {...todoListProps}></TodoList>

        <Action {...actionProps}></Action>

      </section>
      <footer className="info">
        <p>Double-click to edit a todo</p>

        <p>
          Template by
          <a href="http://sindresorhus.com">Sindre Sorhus</a>
        </p>

        <p>
          Created by
          <a href="http://todomvc.com">you</a>
        </p>
        <p>
          Part of
          <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}

export default App;
