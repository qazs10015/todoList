import React from 'react';
import { ADD_TODO } from '../reducers/todoListSlice';
import { useAppDispatch } from '../store';

function Header() {
    console.log('TEST RENDER');
    const dispatch = useAppDispatch();

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key.toLowerCase() === 'enter') {
            dispatch(ADD_TODO({
                id: window.crypto.randomUUID(),
                title: e.currentTarget.value,
                completed: false,
                writable: false,
            }));

            // 清空輸入框
            e.currentTarget.value = '';
        }
    };
    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus={true} onKeyDown={onKeyDown} />
        </header>
    )
}

export default React.memo(Header)