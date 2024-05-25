import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import React from "react";
import { ITodoItemProps } from "./interfaces/ITodoItemProps";
import { IHeaderProps } from "./interfaces/IHeaderProps";
import TodoList from "./components/TodoList";
import { TodoItemStatus } from "./types/TodoItemStatus";
import Action from "./components/Action";

function App() {

  // 儲存所有的 todo item
  const [todoItems, setTodoItems] = useState<ITodoItemProps[]>([]);
  // 儲存過濾後的 todo item
  const [filterTodoItems, setFilterTodoItems] = useState(todoItems);
  // // 過濾狀態
  const [todoItemStatus, setTodoItemStatus] = useState<TodoItemStatus>(() => {
    const fragment = window.location.hash.slice(2).toUpperCase() as TodoItemStatus;
    return fragment || 'ALL';
  });
  const headerRef = useRef<IHeaderProps>(null);

  useEffect(() => {
    const currentHeaderRef = headerRef.current?.todoRef;
    const keydownEvent = ((e: KeyboardEvent) => {

      // add new todo item when press enter 
      if (e.key === 'Enter' && currentHeaderRef && currentHeaderRef.value !== '') {
        const val = headerRef.current.addNewTodo(currentHeaderRef.value);
        setTodoItems((prev) => [...prev, val]);
      }
    });

    // add keydown event listener
    currentHeaderRef?.addEventListener('keydown', keydownEvent);
    // remove keydown event listener when component unmount
    return () => currentHeaderRef?.removeEventListener('keydown', keydownEvent);
  }, []);

  React.useEffect(() => {
    console.log(todoItemStatus);
    switch (todoItemStatus) {
      case 'ACTIVE':
        setFilterTodoItems(todoItems.filter(item => !item.completed));
        break;
      case 'COMPLETED':
        setFilterTodoItems(todoItems.filter(item => item.completed));
        break;
      default:
        setFilterTodoItems(todoItems);
        break;

    }
  }, [todoItemStatus, todoItems]);

  return (
    <>
      <section className="todoapp">

        <Header ref={headerRef}></Header>

        <TodoList todoItems={filterTodoItems} setTodoItems={setTodoItems}></TodoList>

        <Action todoItemCount={filterTodoItems.length} setTodoItems={setTodoItems} setTodoItemEvent={setTodoItemStatus}></Action>

      </section>

      <footer className="info">
        {/* <p>Double-click to edit a todo</p> */}
        <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
        <p>Created by <a href="https://github.com/qazs10015/React_Todo">qazs10015</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </>


  )
}

export default App
