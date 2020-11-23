import { WRITE_ORDERS,WRITE_ORDER_BY_ID} from './types'
import {
     orderDelByIdReq, orderGetByIdReq, orderPostReq, ordersGetReq, orderUpdReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./mainReducer";

const initialState={
    orders: undefined,
    orderById: undefined
}


export const orderReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_ORDERS:
            return{
                ...state,
                orders: action.payload
            }
        case WRITE_ORDER_BY_ID:
            return{
                ...state,
                orderById: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}
export const clearOrder = ()=>{
    return{
        type: WRITE_ORDER_BY_ID,
        action: undefined
    }
}
export const getOrders = ()=> {
    return async dispatch => getTemplate(dispatch, ordersGetReq, WRITE_ORDERS, toggleLoader)
}
export const getOrderById = (id)=> {
    return async dispatch => getTemplate(dispatch, orderGetByIdReq, WRITE_ORDER_BY_ID, toggleLoader,id)
}
export const createOrder = data=>{
    return async dispatch => createOrChangeTemplate(dispatch, orderPostReq, data, toggleLoader).then(()=>getTemplate(dispatch, ordersGetReq, WRITE_ORDERS, toggleLoader))
}
export const deleteOrder = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,orderDelByIdReq,id[i],toggleLoader)
        }
        await getTemplate(dispatch, ordersGetReq, WRITE_ORDERS, toggleLoader)
        // deleteTemplate(dispatch,categoryDelReq,id,toggleLoader).then(()=>getTemplate(dispatch, categoryGetReq, WRITE_CATEGORIES, toggleLoader))
    }
}
export const updateOrder = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,orderUpdReq,data,toggleLoader,id).then(()=>getTemplate(dispatch, ordersGetReq, WRITE_ORDERS, toggleLoader))
}

