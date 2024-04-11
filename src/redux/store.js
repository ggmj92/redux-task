import { configureStore } from '@reduxjs/toolkit';
import allReducer from './allSlice';

const store = configureStore({
    reducer: {
        all: allReducer,
    },
});

export default store;