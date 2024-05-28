import React, { useReducer } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { ITodoItemProps } from './interfaces/ITodoItemProps';
import Action from './components/Action';

interface ITodoState {
  todoItems: ITodoItemProps[];
  filterTodoItems: ITodoItemProps[];
}

const initialState = { todoItems: [], filterTodoItems: [] } as ITodoState;

/** 定義 各種動作與狀態
 * 動作：addNewTodo、toggleAll、toggleCompleted、deleteTodoItem、clearCompleted
 * 狀態：all、active、completed
 */
type ActionType =
  { type: 'addNewTodo', payload: string } |
  { type: 'toggleAll' } |
  { type: 'toggleCompleted'; payload: string } |
  { type: 'deleteTodoItem'; payload: string } |
  { type: 'active' } |
  { type: 'completed' } |
  { type: 'clearCompleted' } |
  { type: 'all' } |
  { type: 'updateTodoItem'; payload: { id: string, title: string } } |
  { type: 'changeWritable'; payload: string }

function reducer(state: ITodoState, action: ActionType) {
  // 用於操作新增、刪除
  let todoItems = state.todoItems;
  // 顯示、過濾用
  let filterTodoItems = state.todoItems;
  switch (action.type) {
    case 'addNewTodo':
      todoItems = [...state.todoItems, { id: window.crypto.randomUUID(), title: action.payload, completed: false, writable: false } as ITodoItemProps]
      return { todoItems, filterTodoItems: todoItems };
    case 'toggleCompleted':
      todoItems = state.todoItems.map((item) => item.id === action.payload ? { ...item, completed: !item.completed } : item);
      return { todoItems, filterTodoItems: todoItems };
    case 'deleteTodoItem':
      todoItems = state.todoItems.filter(item => item.id !== action.payload)
      return { todoItems, filterTodoItems: todoItems };
    case 'toggleAll':
      todoItems = state.todoItems.map(item => ({ ...item, completed: !item.completed }));
      return { todoItems, filterTodoItems: todoItems };
    case 'completed':
      filterTodoItems = state.todoItems.filter(item => item.completed);
      return { todoItems, filterTodoItems };
    case 'active':
      filterTodoItems = state.todoItems.filter(item => !item.completed);
      return { todoItems, filterTodoItems };
    case 'clearCompleted':
      todoItems = state.todoItems.filter(item => !item.completed);
      return { todoItems, filterTodoItems: todoItems };
    case 'all':
      return { todoItems, filterTodoItems };
    case 'changeWritable':
      todoItems = state.todoItems.map((item) => item.id === action.payload ? { ...item, writable: !item.writable } : item);
      return { todoItems, filterTodoItems: todoItems };
    case 'updateTodoItem':
      todoItems = state.todoItems.map((item) => item.id === action.payload.id ? { ...item, title: action.payload.title, writable: false } : item);
      return { todoItems, filterTodoItems: todoItems };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addNewTodo = React.useCallback((todo: string) => {
    return dispatch({
      type: 'addNewTodo',
      payload: todo,
    });
  }, []);

  const toggleCompleted = React.useCallback((id: string) => {
    return dispatch({
      type: 'toggleCompleted',
      payload: id,
    });
  }, []);

  const toggleAll = React.useCallback(() => {
    return dispatch({
      type: 'toggleAll',
    });
  }, []);

  const deleteTodoItem = React.useCallback((id: string) => {
    return dispatch({
      type: 'deleteTodoItem',
      payload: id,
    });
  }, []);

  const filterTodoItems = React.useCallback((filter: 'all' | 'active' | 'completed') => {
    return dispatch({
      type: filter,
      payload: filter,
    });
  }, []);

  const clearCompleted = React.useCallback(() => {
    return dispatch({
      type: 'clearCompleted',
    });
  }, []);

  const updateTodoItem = React.useCallback((id: string, title: string) => {
    return dispatch({
      type: 'updateTodoItem',
      payload: { id, title },
    });
  }, []);

  const changeWritable = React.useCallback((id: string) => {
    return dispatch({
      type: 'changeWritable',
      payload: id,
    });
  }, []);

  // console.log(state.todoItems);
  return (
    <>
      <section className="todoapp">
        <Header addNewTodo={addNewTodo}></Header>

        <TodoList changeWritable={changeWritable} updateTodoItem={updateTodoItem} todoItems={state.filterTodoItems || []} toggleCompleted={toggleCompleted} deleteTodoItem={deleteTodoItem} toggleAll={toggleAll}></TodoList>

        <Action count={state.filterTodoItems?.length || 0} filterTodoItems={filterTodoItems} clearCompleted={clearCompleted}></Action>

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
