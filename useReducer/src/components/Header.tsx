import React from "react";
import { IHeaderProps } from "../interfaces/IHeaderProps"

function Header({ addNewTodo, toggleAll }: IHeaderProps) {
    console.log('TEST RENDER');
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const newTodo = event.currentTarget.value.trim();
            if (newTodo) {
                addNewTodo(newTodo); // Add the missing addNewTodo prop
                event.currentTarget.value = '';
            }
        }
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <input id="toggle-all" className="toggle-all" type="checkbox" onChange={toggleAll} />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={handleKeyDown} />
        </header>
    )
}

export default React.memo(Header)