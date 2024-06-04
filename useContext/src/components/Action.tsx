import { useContext } from 'react';
import { TodoAppContext } from '../context/todoContext';

function Action() {
    const todoAppContext = useContext(TodoAppContext);
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{todoAppContext?.todoItems.length}</strong> item left</span>
            <ul className="filters">
                <li>
                    <a className="selected" href="#/" onClick={() => todoAppContext?.setFilter('All')}>All</a>
                </li>
                <li>
                    <a href="#/active" onClick={() => todoAppContext?.setFilter('Active')}>Active</a>
                </li>
                <li>
                    <a href="#/completed" onClick={() => todoAppContext?.setFilter('Completed')}>Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={() => todoAppContext?.clearCompleted()}>Clear completed</button>
        </footer>
    )
}

export default Action