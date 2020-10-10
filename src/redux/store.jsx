import { createStore, compose, applyMiddleware } from "redux";
import {rootReducer} from './reducers'
import thunk from 'redux-thunk'


let store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            thunk
        )
    )
)

export default  store;