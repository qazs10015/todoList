import { useContext } from 'react';
import { TodoAppContext } from '../context/todoContext';

function TodoList() {
    const todoAppContext = useContext(TodoAppContext);
    const filterTodoItems = todoAppContext ? todoAppContext?.todoItems.filter((item) => {
        if (todoAppContext.filterState === 'Active') {
            return !item.completed;
        } else if (todoAppContext.filterState === 'Completed') {
            return item.completed;
        }
        return item;
    }) : [];
    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list" >
                {todoAppContext && filterTodoItems.map((todoItem) => {
                    return <li key={todoItem.id} className={todoItem.completed ? 'completed' : ''} onDoubleClick={() => todoAppContext?.changeWritable(todoItem.id)}>
                        {todoItem.writable
                            ? <input type="text" className="new-todo" autoFocus defaultValue={todoItem.title} onBlur={(e) => todoAppContext.updateTodoItem(todoItem.id, e.target.value)} ></input>
                            : <div className="view">

                                <input className="toggle" type="checkbox" checked={todoItem.completed} onChange={() => todoAppContext.toggleCompleted(todoItem.id)}></input>
                                <label>{todoItem.title}</label>
                                <button className="destroy" onClick={() => todoAppContext.deleteTodoItem(todoItem.id)}></button>
                            </div>
                        }
                    </li>
                })}
            </ul>
        </section>
    )
}

export default TodoList