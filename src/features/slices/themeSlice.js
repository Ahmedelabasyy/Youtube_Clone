import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: 'light',
        sideBar: false
    },
    reducers: {
        toggleTheme: (state, action) => {
            state.theme = action.payload
        },
        toggleSideBar: (state, action) => {
            state.sideBar = action.payload
        }
    }
});

export const {toggleTheme, toggleSideBar} = themeSlice.actions;
export default themeSlice.reducer;