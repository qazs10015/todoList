import React from 'react'
import { IHeaderProps } from '../interfaces/IHeaderProps';


const Header: React.FC<IHeaderProps> = ({ addNewTodo }) => {

    const event = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addNewTodo({
                id: window.crypto.randomUUID().toString(),
                title: e.currentTarget.value,
                completed: false
            });
            // clear input
            e.currentTarget.value = '';
        }
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus onKeyDown={event}></input>
        </header>
    )
}

export default Header
