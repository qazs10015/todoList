import React from 'react';
import { IActionProps } from '../interfaces/IActionProps'

function Action({ count, clearCompleted, setFilter }: IActionProps) {
    return (
        <footer className="footer">

            <span className="todo-count">
                <strong>{count}</strong>
                {' '}
                item left
            </span>

            <ul className="filters">
                <li>
                    <a className="selected" href="#/" onClick={() => setFilter('All')}>All</a>
                </li>
                <li>
                    <a href="#/active" onClick={() => setFilter('Active')}>Active</a>
                </li>
                <li>
                    <a href="#/completed" onClick={() => setFilter('Completed')}>Completed</a>
                </li>
            </ul>

            <button type="button" className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        </footer>
    )
}

export default React.memo(Action);