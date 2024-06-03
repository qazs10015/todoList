import React from 'react';
import { IMainProps } from '../interfaces/IMainProps'

function TodoList({ todoItems, toggleCompleted, deleteTodoItem, updateTodoItem, changeWritable }: IMainProps) {

    return (
        <section className="main">
            <ul className="todo-list">
                {todoItems.map((todoItem) => {
                    return (
                        <li key={todoItem.id} className={todoItem.completed ? 'completed' : ''} onDoubleClick={() => changeWritable(todoItem.id)}>
                            {todoItem.writable ?
                                <input type="text" className="new-todo" autoFocus defaultValue={todoItem.title} onBlur={(e) => updateTodoItem(todoItem.id, e.target.value)} />
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