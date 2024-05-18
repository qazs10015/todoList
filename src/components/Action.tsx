import React from 'react';
import { IActionProps } from '../interfaces/IActionProps';
import { TodoItemStatus } from '../types/TodoItemStatus';

const Action: React.FC<IActionProps> = ({ todoItemCount, setTodoItemEvent }) => {
    // get fragment from URL
    const fragment = window.location.hash.slice(2).toUpperCase() as TodoItemStatus | '';

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{todoItemCount}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a className={fragment === '' ? 'selected' : ''} href="#/" onClick={() => setTodoItemEvent('ALL')}>All</a>
                </li>
                <li>
                    <a href="#/active" className={['ACTIVE', 'CLEAR-COMPLETED'].includes(fragment) ? 'selected' : ''} onClick={() => setTodoItemEvent('ACTIVE')}>Active</a>
                </li>
                <li>
                    <a href="#/completed" className={fragment === 'COMPLETED' ? 'selected' : ''} onClick={() => setTodoItemEvent('COMPLETED')}>Completed</a>
                </li>
                <li>
                    <a href="#/clear-completed" className={fragment === 'COMPLETED' ? 'selected' : ''} onClick={() => setTodoItemEvent('CLEAR-COMPLETED')}>Clear completed</a>
                </li>
            </ul>
            <button className="clear" onClick={() => setTodoItemEvent('CLEAR')}>Clear</button>
        </footer>
    )
}

export default Action