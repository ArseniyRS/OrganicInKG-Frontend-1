import {
    WRITE_ORDERS,
    WRITE_ORDER_BY_ID,
    SEARCHING,
    ORDER_TOGGLE_FETCH_LOADER,
    WRITE_DELIVERY_CASH
} from './types'
import {
    deliveryCashGetReq,
    deliveryCashUpdReq,
    orderDelByIdReq, orderGetByIdReq, orderPostReq, ordersGetReq, orderUpdReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {checkHasData} from "../../utils/checkHasData";
import {getSearchedTemplate} from "../../utils/templates/getSearchedTemplate";

const initialState={
    orders: [],
    orderById: {},
    deliveryCash : {},
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
        case WRITE_DELIVERY_CASH:
            return{
                ...state,
                deliveryCash: action.payload,
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
export const getDeliveryCash = ()=>{
    return async dispatch =>getTemplate(dispatch,deliveryCashGetReq,WRITE_DELIVERY_CASH,orderToggleLoader)
}

export const updateDeliveryCash = data=>{
    return async dispatch =>createOrChangeTemplate(dispatch,deliveryCashUpdReq,data,orderToggleLoader)
}

export const createOrder = data=>{
    return async dispatch => createOrChangeTemplate(dispatch, orderPostReq, data, orderToggleLoader)
}
export const deleteOrder = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,orderDelByIdReq,id[i],orderToggleLoader)
        }
    }
}
export const updateOrder = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,orderUpdReq,data,orderToggleLoader,id)
}

