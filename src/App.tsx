import React, { useState } from "react";
import Action from "./components/Action";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { ITodoItemProps } from "./interfaces/ITodoItemProps";
import { TodoItemStatus } from "./types/TodoItemStatus";



function App() {

  // 儲存所有的 todo item
  const [todoItems, setTodoItems] = useState<ITodoItemProps[]>([]);
  // 儲存過濾後的 todo item
  const [filterTodoItems, setFilterTodoItems] = useState(todoItems);
  // 過濾狀態
  const [todoItemStatus, setTodoItemStatus] = useState<TodoItemStatus>('ALL')

  const addNewTodo = (newTodo: ITodoItemProps) => {
    console.log(newTodo);
    setTodoItems((prev) => [...prev, newTodo]);
  }

  React.useEffect(() => {
    switch (todoItemStatus) {
      case 'ACTIVE':
        setFilterTodoItems(todoItems.filter(item => !item.completed));
        break;
      case 'COMPLETED':
        setFilterTodoItems(todoItems.filter(item => item.completed));
        break;
      case 'CLEAR-COMPLETED':
        setFilterTodoItems(todoItems);
        break;
      case 'CLEAR':
        setFilterTodoItems([]);
        break;
    }
  }, [todoItemStatus, todoItems]);

  React.useEffect(() => {
    switch (todoItemStatus) {
      case 'CLEAR-COMPLETED':
        setTodoItems(todoItems.filter(item => !item.completed));
        break;
      case 'CLEAR':
        setTodoItems([]);
        break;
    }
  }, [todoItemStatus]);


  return (
    <>
      <section className="todoapp">

        <Header addNewTodo={addNewTodo} ></Header>

        <TodoList todoItems={filterTodoItems} changeTodoItemStatus={setFilterTodoItems} setTodoItems={setTodoItems}></TodoList>

        <Action todoItemCount={filterTodoItems.length} setTodoItemEvent={setTodoItemStatus} ></Action>

      </section>

      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
        <p>Created by <a href="https://github.com/qazs10015/React_Todo">qazs10015</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </>


  )
}

export default App
