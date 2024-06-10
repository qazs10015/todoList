import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodoItemProps } from '../interfaces/ITodoItemProps';

type TodoListVisibleState = 'Active' | 'All' | 'Completed';

interface TodoListState {
  todoList: ITodoItemProps[];
  visibleState: TodoListVisibleState;
}
/** 初始值 */
const initialState: TodoListState = {
  todoList: [],
  visibleState: 'All',
};

/** 建立 todoList 的 reducer */
const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    /** 新增 todo */
    ADD_TODO: (state, action: PayloadAction<ITodoItemProps>) => {
      state.todoList.push(action.payload);
    },
    /** 刪除 todo */
    DELETE_TODO: (state, action: PayloadAction<string>) => {
      state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
    },
    /** 是否已完成 todo */
    TOGGLE_TODO: (state, action: PayloadAction<string>) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    /** 編輯 todo */
    EDIT_TODO: (state, action: PayloadAction<string>) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload);
      if (todo) todo.writable = !todo.writable;
    },
    /** 篩選要顯示的資料 */
    CHANGE_VISIBLE_STATE: (state, action: PayloadAction<TodoListVisibleState>) => {
      state.visibleState = action.payload;
    },
    /** 清楚已完成的 todo */
    CLEAR_COMPLETED: (state) => {
      state.todoList = state.todoList.filter((todo) => !todo.completed);
    },
    /** 切換所有的 todo 狀態 */
    TOGGLE_ALL_TODO: (state) => {
      state.todoList = state.todoList.map((todo) => ({ ...todo, completed: !todo.completed }));
    },
    /** 切換修改模式 */
    CHANGE_WRITABLE: (state, action: PayloadAction<string>) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload);
      if (todo) todo.writable = !todo.writable;
    },
    /** 更新單筆資料 */
    UPDATE_TODO_ITEM: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const todo = state.todoList.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        todo.writable = !todo.writable;
      }
    },
  },
});

/** 取得對應的 Actions */
export const {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  CHANGE_VISIBLE_STATE,
  CLEAR_COMPLETED,
  TOGGLE_ALL_TODO,
  CHANGE_WRITABLE,
  UPDATE_TODO_ITEM,
} = todoListSlice.actions;

/** 匯出 todoList 的 reducer */
export default todoListSlice.reducer;
