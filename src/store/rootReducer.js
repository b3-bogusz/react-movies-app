import { combineReducers } from '@reduxjs/toolkit';
import AppReducer from "./reducers/appSlice/appSlice";
import GlobalReducer from "./reducers/globalSlice/globalSlice";


const rootReducer = combineReducers({
    app: AppReducer,
    global: GlobalReducer,
});

export default rootReducer;