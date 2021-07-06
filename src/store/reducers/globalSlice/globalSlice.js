import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsLoading(state, { payload }) {
            state.isLoading = payload
        }
    }
})

export const {
    setIsLoading
} = globalSlice.actions;

export default globalSlice.reducer;