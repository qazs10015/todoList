import React from 'react';
import { IMainProps } from '../interfaces/IMainProps'

function TodoList({ todoItems, toggleCompleted, deleteTodoItem, toggleAll, updateTodoItem, changeWritable }: IMainProps) {

    const handleDoubleClick = (todoItem: any) => {
        todoItem.writable = !todoItem.writable;
        return todoItem;
    };


    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" onChange={toggleAll} />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {todoItems.map((todoItem) => {
                    return (
                        <li key={todoItem.id} className={todoItem.completed ? 'completed' : ''} onDoubleClick={() => changeWritable(todoItem.id)}>
                            {todoItem.writable ?
                                <input type="text" className="new-todo" defaultValue={todoItem.title} onBlur={(e) => updateTodoItem(todoItem.id, e.target.value)} />
                                :
                                <div className="view">
                                    <input className="toggle" type="checkbox" checked={todoItem.completed} onChange={() => toggleCompleted(todoItem.id)} />
                                    <label>{todoItem.title}</label>
                                    <button type="button" className="destroy" onClick={() => deleteTodoItem(todoItem.id)} />
                                </div>
                            }
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default React.memo(TodoList);