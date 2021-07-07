import { combineReducers } from '@reduxjs/toolkit';
import AppReducer from "./reducers/appSlice/appSlice";
import GlobalReducer from "./reducers/globalSlice/globalSlice";
import MovieDetailsReducer from './reducers/movieDetailsSlice/movieDetailsSlice'


const rootReducer = combineReducers({
    app: AppReducer,
    global: GlobalReducer,
    movieDetails: MovieDetailsReducer,
});

export default rootReducer;