import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice';
import colorReducer from './features/colorSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        color: colorReducer
    }
})