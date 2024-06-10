import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_VISIBLE_STATE, CLEAR_COMPLETED } from '../reducers/todoListSlice';
import { RootState } from '../store';

function Footer() {
    const todoItems = useSelector((state: RootState) => state.todoListState.todoList);
    const dispatch = useDispatch();
    return (
        <footer className="footer">

            <span className="todo-count"><strong>{todoItems.length}</strong> item left</span>

            <ul className="filters">
                <li>
                    <a className="selected" href="#/" onClick={() => dispatch(CHANGE_VISIBLE_STATE('All'))}>All</a>
                </li>
                <li>
                    <a href="#/active" onClick={() => dispatch(CHANGE_VISIBLE_STATE('Active'))}>Active</a>
                </li>
                <li>
                    <a href="#/completed" onClick={() => dispatch(CHANGE_VISIBLE_STATE('Completed'))}>Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={() => dispatch(CLEAR_COMPLETED())}>Clear completed</button>
        </footer>
    )
}

export default Footer