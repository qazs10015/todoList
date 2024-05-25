import React, { forwardRef } from 'react';
import { IHeaderProps } from '../interfaces/IHeaderProps';



const Header = React.memo(forwardRef<IHeaderProps, object>((props, ref) => {
    const todoRef = React.useRef<HTMLInputElement>(null);
    console.log('TEST RENDER');

    // 新增一筆 todo
    const addNewTodo = (todo: string) => {
        return {
            id: window.crypto.randomUUID().toString(),
            title: todo,
            completed: false
        }
    }

    // 提供給父元件的方法
    React.useImperativeHandle(
        ref,
        () => ({
            todoRef: todoRef.current,
            addNewTodo
        }),
        []);

    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus ref={todoRef}></input>
        </header>
    )
}));

export default Header;
