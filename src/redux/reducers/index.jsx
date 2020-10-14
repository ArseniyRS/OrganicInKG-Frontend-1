import { combineReducers } from "redux";
import {tableReducer} from "./tableReducer";


export const rootReducer = combineReducers({
    table: tableReducer
})