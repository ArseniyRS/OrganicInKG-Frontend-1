import { combineReducers } from "redux";
import {tableReducer} from "./tableReducer";
import {modalReducer} from "./modalReducer";


export const rootReducer = combineReducers({
    table: tableReducer,
    modal: modalReducer
})