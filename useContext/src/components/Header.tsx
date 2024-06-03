import React, { useContext } from "react";
import { TodoAppContext } from "../context/todoContext";


function Header() {
    const todoContext = useContext(TodoAppContext);
    const addNewTodo = todoContext?.addNewTodo;
    console.log('TEST RENDER');
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const newTodo = event.currentTarget.value.trim();
            if (newTodo && addNewTodo) {
                addNewTodo(newTodo); // Add the missing addNewTodo prop
                event.currentTarget.value = '';
            }
        }
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={handleKeyDown} />
        </header>
    )
}

export default React.memo(Header)