import { useContext } from 'react';
import { TodoAppContext } from '../context/todoContext';

function TodoList() {
    const todoAppContext = useContext(TodoAppContext);
    console.log(todoAppContext?.todoItems);
    return (
        <>
            {todoAppContext && todoAppContext?.todoItems.map((item) => {
                return <div key={item.id}>{item.title}</div>
            })}
        </>
    )
}

export default TodoList