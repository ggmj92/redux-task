import { createSlice } from '@reduxjs/toolkit';

const allSlice = createSlice({
    name: 'all',
    initialState: [],
    reducers: {
        addAll: (state, action) => {
            state.push({ id: Date.now(), text: action.payload, completed: false });
        },
        deleteAll: (state, action) => {
            return state.filter(all => all.id !== action.payload);
        },
    },
});

export const { addAll, deleteAll } = allSlice.actions;

export default allSlice.reducer;