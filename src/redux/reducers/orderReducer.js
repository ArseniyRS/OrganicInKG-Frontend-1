import {
    WRITE_ORDERS,
    WRITE_ORDER_BY_ID,ADDED_ORDER,DELETED_ORDER,UPDATED_ORDER} from './types'
import {
     orderDelByIdReq, orderGetByIdReq, orderPostReq, ordersGetReq, orderUpdReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./mainReducer";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";

const initialState={
    orders: undefined,
    orderById: undefined
}


export const orderReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_ORDERS:
            return{
                ...state,
                orders:  [...state.orders,...action.payload]
            }
        case WRITE_ORDER_BY_ID:
            return{
                ...state,
                orderById: action.payload
            }
        case ADDED_ORDER:
            return {
                ...state,
                orders: [
                    ...state.orders,
                    action.payload]
            }
        case DELETED_ORDER:
            return{
                ...state,
                orders: updateItemInStore(state.orders,action.payload,'delete')
            }
        case UPDATED_ORDER:
            return {
                ...state,
                orders: updateItemInStore(state.orders,action.payload,'update')
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
export const getOrders = (page)=> {
    return async dispatch => getTemplate(dispatch, ordersGetReq, WRITE_ORDERS, toggleLoader,page)
}
export const getOrderById = (id)=> {
    return async dispatch => getTemplate(dispatch, orderGetByIdReq, WRITE_ORDER_BY_ID, toggleLoader,id)
}
export const createOrder = data=>{
    return async dispatch => createOrChangeTemplate(dispatch, orderPostReq, data,ADDED_ORDER, toggleLoader)
}
export const deleteOrder = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,orderDelByIdReq,id[i],toggleLoader,DELETED_ORDER)
        }
    }
}
export const updateOrder = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,orderUpdReq,data,UPDATED_ORDER,toggleLoader,id)
}

