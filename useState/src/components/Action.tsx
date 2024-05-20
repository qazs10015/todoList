import React from 'react';
import { IActionProps } from '../interfaces/IActionProps';
import { TodoItemStatus } from '../types/TodoItemStatus';

const Action: React.FC<IActionProps> = ({ todoItemCount, setTodoItems, setTodoItemEvent }) => {
    // get fragment from URL
    const fragment = window.location.hash.slice(2).toUpperCase() as TodoItemStatus | '';

    const clearCompleteTodo = () => {
        setTodoItems(prev => prev.filter(item => !item.completed));
    }

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{todoItemCount}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a className={fragment === '' ? 'selected' : ''} href="#/" onClick={() => setTodoItemEvent('ALL')}>All</a>
                </li>
                <li>
                    <a href="#/active" className={fragment === 'ACTIVE' ? 'selected' : ''} onClick={() => setTodoItemEvent('ACTIVE')}>Active</a>
                </li>
                <li>
                    <a href="#/completed" className={fragment === 'COMPLETED' ? 'selected' : ''} onClick={() => setTodoItemEvent('COMPLETED')}>Completed</a>
                </li>
            </ul>
            <button className="clear-completed" onClick={clearCompleteTodo}>Clear completed</button>
        </footer>
    )
}

export default Action