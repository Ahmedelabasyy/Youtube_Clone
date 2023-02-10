import { createSlice } from "@reduxjs/toolkit";

export const statesSlice = createSlice({
    name: 'state',
    initialState: {
        selectedGenre: "Gaming",
        playedVideos: []
    },
    reducers: {
        getSelectedGenre: (state, {payload}) => {
            state.selectedGenre = payload;
        },
        getPlayedVideos: (state, {payload}) => {
            state.playedVideos = [payload, ...state.playedVideos];
            console.log("PLayed Videos", state.playedVideos)
        }
    }
});

export const {getSelectedGenre, getPlayedVideos} = statesSlice.actions;
export default statesSlice.reducer;