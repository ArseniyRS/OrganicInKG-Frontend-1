import { combineReducers } from "redux";
import {tableReducer} from "./tableReducer";
import {modalReducer} from "./modalReducer";
import {mainReducer} from "./mainReducer";
import {categoryReducer} from "./categoryReducer";
import {productReducer} from "./productReducer";
import {providerReducer} from "./providerReducer";
import {userReducer} from "./userReducer";
import {orderReducer} from "./orderReducer";
import {faqReducer} from "./faqReducer";
import {aboutUsReducer} from "./aboutUsReducer";


export const rootReducer = combineReducers({
    main: mainReducer,
    table: tableReducer,
    modal: modalReducer,
    category: categoryReducer,
    product: productReducer,
    provider: providerReducer,
    user:userReducer,
    order: orderReducer,
    faq: faqReducer,
    aboutUs: aboutUsReducer
})