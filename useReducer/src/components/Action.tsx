import React from 'react';
import { IActionProps } from '../interfaces/IActionProps'

function Action({ count, clearCompleted, filterTodoItems }: IActionProps) {
    return (
        <footer className="footer">

            <span className="todo-count">
                <strong>{count}</strong>
                {' '}
                item left
            </span>

            <ul className="filters">
                <li>
                    <a className="selected" href="#/" onClick={() => filterTodoItems('all')}>All</a>
                </li>
                <li>
                    <a href="#/active" onClick={() => filterTodoItems('active')}>Active</a>
                </li>
                <li>
                    <a href="#/completed" onClick={() => filterTodoItems('completed')}>Completed</a>
                </li>
            </ul>

            <button type="button" className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        </footer>
    )
}

export default React.memo(Action);