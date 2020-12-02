import {
    WRITE_PRODUCTS,
    WRITE_PRODUCT_BY_ID,
    WRITE_CATEGORIES,
    WRITE_RAITING_BY_ID,
    ADDED_PRODUCT,
    DELETED_PRODUCT, UPDATED_PRODUCT
} from './types'
import {
    productsGetReq,
    productPostReq,
    productUpdReq,
    productDelByIdReq,
    productImgPostReq,
    raitingPostReq,
    raitingDelByIdReq, raitingGetByIdReq, productGetByIdReq, productImgUpdReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./mainReducer";
import {toClearImageArray} from "../../utils/templates/toClearImageArray";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";

const initialState={
    products: undefined,
    productById: undefined,
    ratingById: undefined
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
        case WRITE_RAITING_BY_ID:
            return{
                ...state,
                ratingById: action.payload
            }
        case ADDED_PRODUCT:
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload]
            }
        case DELETED_PRODUCT:
            return{
                ...state,
                products: updateItemInStore(state.products,action.payload,'delete')
            }
        case UPDATED_PRODUCT:
            return {
                ...state,
                products: updateItemInStore(state.products,action.payload,'update')
            }
        default:{
            return{
                ...state
            }
        }
    }
}
export const clearProduct = ()=>{
    return{
        type: WRITE_PRODUCT_BY_ID,
        action: undefined
    }
}
export const getProducts = ()=> {
    return async dispatch => getTemplate(dispatch, productsGetReq, WRITE_PRODUCTS, toggleLoader)
}
export const getProductById = (id)=> {
    return async dispatch => getTemplate(dispatch, productGetByIdReq, WRITE_PRODUCT_BY_ID, toggleLoader,id)
    // {
    //     dispatch(toggleLoader(true));
    //     let response = await productGetByIdReq(id);
    //     dispatch({type:WRITE_PRODUCTS,payload: response.result})
    //    //  let raiting = await raitingGetByIdReq(id)
    //    // // dispatch({type:WRITE_RAITING_BY_ID,payload: raiting.result})
    //     dispatch(toggleLoader(false))
    //
    // }
}
export const createProduct = data=>{
    return async dispatch => {
        dispatch(toggleLoader(true))
        await productPostReq(data)
            .then( async resp=>{
                dispatch({type:ADDED_PRODUCT,payload: resp.data.result})
                const formData = new FormData()
                toClearImageArray(data.images).map(item=>formData.append('images', item))
                formData.append('productId', resp.data.result.id)
                await productImgPostReq(formData)
        })
            // .then(async resp=>{
            //    await raitingPostReq({"productId": resp.data.result.id})
            // })
        dispatch(toggleLoader(false))
    }
}
export const deleteProduct = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,productDelByIdReq,id[i],toggleLoader,DELETED_PRODUCT)
                // .then(async ()=>{
                //    await raitingDelByIdReq(id)
                // })
        }

    }
}
export const updateProduct = (id,data) =>{
    return async dispatch => {
        dispatch(toggleLoader(true))
        await productUpdReq(data,id)
            .then( async resp=>{
                dispatch({type:UPDATED_PRODUCT,payload: resp.data.result})
                console.log(resp)
                const formData = new FormData()
                toClearImageArray(data.images).map(item=>formData.append('images', item))
                formData.append('productId',id)
                await productImgUpdReq(formData,id)
            })
            // .then(async resp=>{
            //     await raitingPostReq({"productId": id})
            // })

        dispatch(toggleLoader(false))
    }
}

