import React from 'react'
import { ITodoProps } from '../interfaces/ITodoProps'
import { ITodoItemProps } from '../interfaces/ITodoItemProps';

const TodoList: React.FC<ITodoProps> = React.memo(({ todoItems, changeTodoItemStatus }) => {

    // toggle all todo items
    const toggleAll = () => {
        const updatedTodoItems = todoItems.map(item => {
            item.completed = !item.completed;
            return item;
        });
        changeTodoItemStatus(updatedTodoItems);
    };

    // complete todo item
    const completedTodo = (selectedItem: ITodoItemProps) => {
        const updatedTodoItems = todoItems.map(item => {
            if (item.id === selectedItem.id) item.completed = !item.completed;
            return item;
        });
        changeTodoItemStatus(updatedTodoItems);

    }

    // delete todo item
    const deleteTodo = (id: string) => {
        console.log(id);
        changeTodoItemStatus((prev: ITodoItemProps[]) => prev.filter(item => item.id !== id));
    };

    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" onChange={toggleAll}></input>
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {todoItems.map(item => (
                    <li className={item.completed ? 'completed' : ''} key={item.id}>
                        <div className="view">
                            <input className="toggle" type="checkbox" checked={item.completed} onChange={() => completedTodo(item)}></input>
                            <label>{item.title}</label>
                            <button className="destroy" onClick={() => deleteTodo(item.id)}></button>
                        </div>
                        <input className="edit" value={item.title} onChange={() => { }}></input>
                    </li>
                ))}
            </ul>
        </section>
    )
})

export default TodoList