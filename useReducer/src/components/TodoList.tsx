import React from 'react';
import { IMainProps } from '../interfaces/IMainProps'

function TodoList({ todoItems, toggleCompleted, deleteTodoItem, toggleAll }: IMainProps) {
    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" onChange={toggleAll} />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {todoItems.map((todoItem, idx) => {
                    return <li key={idx} className={todoItem.completed ? 'completed' : ''}>
                        <div className="view">
                            <input className="toggle" type="checkbox" checked={todoItem.completed} onChange={() => toggleCompleted(todoItem.id)} />
                            <label>{todoItem.title}</label>
                            <button type="button" className="destroy" onClick={() => deleteTodoItem(todoItem.id)} />
                        </div>
                    </li>
                })}
            </ul>
        </section>
    )
}

export default React.memo(TodoList);