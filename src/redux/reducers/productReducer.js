import {
    WRITE_PRODUCTS,
    WRITE_PRODUCT_BY_ID,
    WRITE_RAITING_BY_ID,
    SEARCHING,
    WRITE_MEASURE_UNITS,
    PRODUCT_TOGGLE_FETCH_LOADER, DELETED_CATEGORY, DELETED_PRODUCT,
} from './types'
import {
    productsGetReq,
    productPostReq,
    productUpdReq,
    productDelByIdReq,
    productImgPostReq,
    productGetByIdReq, productImgUpdReq,  measureUnitGetReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toClearImageArray} from "../../utils/templates/toClearImageArray";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";
import {checkHasData} from "../../utils/checkHasData";
import {getSearchedTemplate} from "../../utils/templates/getSearchedTemplate";
import {toggleLoader} from "./mainReducer";

const initialState={
    products: [],
    productById: {},
    ratingById: undefined,
    hasProducts: true,
    measureUnits: [],
    productFetchLoader: false

}


export const productReducer = (state=initialState,action)=>{
    switch (action.type) {
        case PRODUCT_TOGGLE_FETCH_LOADER:
            return{
                ...state,
                productFetchLoader: action.payload
            }
        case WRITE_MEASURE_UNITS:
            return{
                ...state,
                measureUnits: action.payload,
            }
        case WRITE_PRODUCTS:
            return{
                ...state,
                products: [...state.products,...action.payload],
                hasProducts: checkHasData(action.payload)
            }
        case SEARCHING:
            return {
                ...state,
                products: [],
                hasProducts: true
            }
        case WRITE_PRODUCT_BY_ID:
            return{
                ...state,
                productById: action.payload
            }
        case WRITE_RAITING_BY_ID:
            return{
                ...state,
                ratingById: action.payload
            }
        case DELETED_PRODUCT:
            return{
                ...state,
                products: updateItemInStore(state.products,action.payload,'delete')
            }
        default:{
            return{
                ...state
            }
        }
    }
}
export const productToggleLoader = bool=>{
    return{
        type: PRODUCT_TOGGLE_FETCH_LOADER,
        payload: bool
    }
}

export const clearProduct = ()=>{
    return{
        type: WRITE_PRODUCT_BY_ID,
        action: undefined
    }
}
export const getMeasureUnits = ()=>{
    return async dispatch =>getTemplate(dispatch,measureUnitGetReq,WRITE_MEASURE_UNITS,toggleLoader)
}
export const getProducts = (page,searchText)=> {
    return async dispatch => getSearchedTemplate(dispatch, productsGetReq, WRITE_PRODUCTS, productToggleLoader,page,searchText)
}
export const getProductById = (id)=> {
    return async dispatch => getTemplate(dispatch, productGetByIdReq, WRITE_PRODUCT_BY_ID, productToggleLoader,id)
}
export const createProduct = data=>{
    return async dispatch => {
            dispatch(productToggleLoader(true))
            await productPostReq(data)
                .then(async resp => {
                    if (data.images) {
                        const formData = new FormData()
                        toClearImageArray(data.images).map(item => formData.append('images', item))
                        formData.append('productId', resp.data.result.id)
                        await productImgPostReq(formData)
                    }
                })
            dispatch(productToggleLoader(false))
    }
}
export const deleteProduct = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,productDelByIdReq,id[i],productToggleLoader,DELETED_PRODUCT)

        }

    }
}
export const updateProduct = (id,data) =>{
    return async dispatch => {
        dispatch(productToggleLoader(true))
        await productUpdReq(data,id)
            .then( async resp=>{
                if(data.images) {
                    const formData = new FormData()
                    toClearImageArray(data.images).map(item => formData.append('images', item))
                    formData.append('productId', resp.data.result.id)
                    await productImgPostReq(formData)
                }
            })

        dispatch(productToggleLoader(false))
    }
}

