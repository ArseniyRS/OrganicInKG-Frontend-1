import { combineReducers } from "redux";
import {tableReducer} from "./tableReducer";
import {modalReducer} from "./modalReducer";
import {mainReducer} from "./mainReducer";
import {categoryReducer} from "./categoryReducer";


export const rootReducer = combineReducers({
    main: mainReducer,
    table: tableReducer,
    modal: modalReducer,
    category: categoryReducer
})