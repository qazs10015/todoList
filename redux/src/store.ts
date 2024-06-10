import { configureStore } from '@reduxjs/toolkit';
// import todoListSlice from './reducers/todoListSlice';
import { useDispatch, useSelector } from 'react-redux';
import todoListSlice from './reducers/todoListSlice';

// 建立 Store 物件控制整個應用程式的狀態
export const store = configureStore({
  reducer: {
    todoListState: todoListSlice,
  },
});

// 透過 typeof store.getState() 取得 RootState 的型別
export type RootState = ReturnType<typeof store.getState>;
// 透過 typeof store.dispatch 取得 AppDispatch 的型別
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
