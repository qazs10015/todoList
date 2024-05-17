import { useEffect, useState } from "react";
import Action from "./components/Action"
import Header from "./components/Header"
import { ITodoItemProps } from "./interfaces/ITodoItemProps";
import TodoList from "./components/TodoList";

function App() {
  const [newTodo, setNewTodo] = useState<ITodoItemProps>(() => ({ id: '', title: '', completed: false }));
  const [todoItem, setTodoItem] = useState<ITodoItemProps[]>([]);

  useEffect(() => {
    if (newTodo.id) {
      console.log(newTodo);
      setTodoItem((prev) => [...prev, newTodo])
    }
  }, [newTodo])

  useEffect(() => {
    console.log(todoItem);
  }, [todoItem]);

  // console.log(todo);

  return (
    <>
      <section className="todoapp">

        <Header addNewTodo={setNewTodo} ></Header>

        <TodoList todoItems={todoItem}  changeTodoItemStatus={setTodoItem}></TodoList>

        <Action></Action>


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
