import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './modules/counter';
import {
  TypedUseSelectorHook,
  useSelector,
  useDispatch,
  shallowEqual
} from 'react-redux';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

//为了得到state的类型检测
type GetStateFnType = typeof store.getState;
type IRootState = ReturnType<GetStateFnType>;
type DispacthType = typeof store.dispatch;

// useAppSelector的hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => DispacthType = useDispatch;
export const shallowEqualApp = shallowEqual;

export default store;
