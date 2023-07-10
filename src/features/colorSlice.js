import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    backgroundColor: '',
    fontColor: ''
}

export const colorSlice = createSlice({
    name: 'color',
    initialState: initialState,
    reducers: {
        changeColor: (state, action) => {
            state.backgroundColor = action.payload
        },
        changeFontColor: (state, action) => {
            state.fontColor = action.payload
        }
    }
});

export const selectColor = (state) => state.color;
export const { changeColor, changeFontColor } = colorSlice.actions;
export default colorSlice.reducer;