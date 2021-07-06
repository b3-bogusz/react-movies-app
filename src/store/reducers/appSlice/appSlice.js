import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSearchedMovies(state, { payload }) {
            state.movies = payload
        },
        setLastSearchedQuery(state, { payload }) {
            state.query = payload
        },
        setPageNumber(state, { payload }) {
            state.pageNumber = payload
        }
    }
})

export const {
    setSearchedMovies,
    setLastSearchedQuery,
    setPageNumber,
} = appSlice.actions;

export default appSlice.reducer;