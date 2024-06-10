import { useDispatch } from 'react-redux';
import { CHANGE_WRITABLE, DELETE_TODO, TOGGLE_ALL_TODO, TOGGLE_TODO, UPDATE_TODO_ITEM } from '../reducers/todoListSlice';
import { RootState, useAppSelector } from '../store';

function TodoList() {

    const todoItems = useAppSelector((state: RootState) => state.todoListState.todoList);

    const todoVisibleState = useAppSelector((state: RootState) => state.todoListState.visibleState);

    const dispatch = useDispatch();

    let filterTodoItems = [];

    switch (todoVisibleState) {
        case 'Active':
            filterTodoItems = todoItems.filter(todo => !todo.completed);
            break;
        case 'Completed':
            filterTodoItems = todoItems.filter(todo => todo.completed);
            break;
        case 'All':
            filterTodoItems = todoItems;
            break;
    }

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" onChange={() => dispatch(TOGGLE_ALL_TODO())} />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {filterTodoItems.map((todoItem) => {
                    return (
                        <li key={todoItem.id} className={todoItem.completed ? 'completed' : ''} onDoubleClick={() => dispatch(CHANGE_WRITABLE(todoItem.id))}>
                            {todoItem.writable ?
                                <input type="text" className="new-todo" autoFocus defaultValue={todoItem.title} onBlur={(e) => dispatch(UPDATE_TODO_ITEM({ id: todoItem.id, title: e.target.value }))} />
                                :
                                <div className="view">
                                    <input className="toggle" type="checkbox" checked={todoItem.completed} onChange={() => dispatch(TOGGLE_TODO(todoItem.id))} />
                                    <label>{todoItem.title}</label>
                                    <button type="button" className="destroy" onClick={() => dispatch(DELETE_TODO(todoItem.id))} />
                                </div>
                            }
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default TodoList