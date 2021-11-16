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
        },
        setTotalResults(state, { payload}) {
            state.totalResults = payload
        },
    }
})

export const {
    setSearchedMovies,
    setLastSearchedQuery,
    setPageNumber,
    setTotalResults,
} = appSlice.actions;

export default appSlice.reducer;