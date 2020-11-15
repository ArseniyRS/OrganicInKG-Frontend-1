import { WRITE_PRODUCTS,WRITE_PRODUCT_BY_ID} from './types'
import {
    productDelReq, productGetByIdReq,
    productsGetReq,
    productPostReq,
    productUpdReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./mainReducer";

const initialState={
    products: undefined,
    productById: undefined
}


export const productReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        case WRITE_PRODUCT_BY_ID:
            return{
                ...state,
                productById: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}

export const getProducts = ()=> {
    return async dispatch => getTemplate(dispatch, productsGetReq, WRITE_PRODUCTS, toggleLoader)
}
export const getProductById = (id)=> {
    return async dispatch => getTemplate(dispatch, productGetByIdReq, WRITE_PRODUCT_BY_ID, toggleLoader,id)
}
export const createProduct = data=>{
    return async dispatch => createOrChangeTemplate(dispatch, productPostReq, data, toggleLoader).then(()=>getTemplate(dispatch, productsGetReq, WRITE_PRODUCTS, toggleLoader))
}
export const deleteProduct = id =>{
    return async dispatch => deleteTemplate(dispatch,productDelReq,id,toggleLoader).then(()=>getTemplate(dispatch, productsGetReq, WRITE_PRODUCTS, toggleLoader))
}
export const updateProduct = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,productUpdReq,data,toggleLoader,id).then(()=>getTemplate(dispatch, productsGetReq, WRITE_PRODUCTS, toggleLoader))
}

