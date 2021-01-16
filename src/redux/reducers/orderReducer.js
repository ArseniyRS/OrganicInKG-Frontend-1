import {
    WRITE_ORDERS,
    WRITE_ORDER_BY_ID,
    ADDED_ORDER,
    DELETED_ORDER,
    UPDATED_ORDER,
    SEARCHING,
    ORDER_TOGGLE_FETCH_LOADER,
    PRODUCT_TOGGLE_FETCH_LOADER
} from './types'
import {
    orderDelByIdReq, orderGetByIdReq, orderPostReq, ordersGetReq, orderUpdReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";
import {checkHasData} from "../../utils/checkHasData";
import {getSearchedTemplate} from "../../utils/templates/getSearchedTemplate";

const initialState={
    orders: [],
    orderById: {},
    hasOrders: true,
    orderFetchLoader: false
}


export const orderReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ORDER_TOGGLE_FETCH_LOADER:
            return{
                ...state,
                orderFetchLoader: action.payload
            }
        case WRITE_ORDERS:
            return{
                ...state,
                orders: [...state.orders,...action.payload],
                hasOrders: checkHasData(action.payload)
            }
        case SEARCHING:
            return {
                ...state,
                orders: [],
                hasOrders: true
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
export const orderToggleLoader = bool=>{
    return{
        type: ORDER_TOGGLE_FETCH_LOADER,
        payload: bool
    }
}

export const getOrders = (page,searchText)=> {
    return async dispatch => getSearchedTemplate(dispatch, ordersGetReq, WRITE_ORDERS, orderToggleLoader,page,searchText)
}
export const getOrderById = (id)=> {
    return async dispatch => getTemplate(dispatch, orderGetByIdReq, WRITE_ORDER_BY_ID, orderToggleLoader,id)
}
export const createOrder = data=>{
    return async dispatch => createOrChangeTemplate(dispatch, orderPostReq, data,ADDED_ORDER, orderToggleLoader)
}
export const deleteOrder = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,orderDelByIdReq,id[i],orderToggleLoader,DELETED_ORDER)
        }
    }
}
export const updateOrder = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,orderUpdReq,data,UPDATED_ORDER,orderToggleLoader,id)
}

