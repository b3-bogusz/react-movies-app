import initialState from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState,
    reducers: {
        setMovieDetails(state, { payload }) {
            state.movieDetails = payload
        }
    }
})

export const {
    setMovieDetails,
} = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;
