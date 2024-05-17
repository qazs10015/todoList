import React from 'react'
import { ITodoProps } from '../interfaces/ITodoProps'
import { ITodoItemProps } from '../interfaces/ITodoItemProps';

const TodoList: React.FC<ITodoProps> = ({ todoItems, changeTodoItemStatus }) => {



    const toggleAll = () => {

    };

    const completedTodo = (selectedItem: ITodoItemProps) => {
        const updatedTodoItems = todoItems.map(item => {
            if (item.id === selectedItem.id) item.completed = !item.completed;
            return item;
        });
        changeTodoItemStatus(updatedTodoItems);

    }

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
            {/* <ul className="todo-list">
                {todoItems.map(item => (
                    <li className='completed' key={item.id}>
                        <div className="view">
                            <input className="toggle" type="checkbox" checked={item.completed}></input>
                            <label>{item.title}</label>
                            <button className="destroy"></button>
                        </div>
                        <input className="edit" value={item.title}></input>
                    </li>
                ))}
            </ul> */}
            {/* <ul className="todo-list">
                <li className="completed" >
                    <div className="view">
                        <input className="toggle" type="checkbox" checked></input>
                        <label>Taste JavaScript</label>
                        <button className="destroy"></button>
                    </div>
                    <input className="edit" value="Create a TodoMVC template"></input>
                </li>
                <li>
                    <div className="view">
                        <input className="toggle" type="checkbox"></input>
                        <label>Buy a unicorn</label>
                        <button className="destroy"></button>
                    </div>
                    <input className="edit" value="Rule the web"></input>
                </li>
            </ul> */}
        </section>
    )
}

export default TodoList