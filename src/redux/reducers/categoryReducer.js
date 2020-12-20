import {
    WRITE_CATEGORIES,
    WRITE_CATEGORY_BY_ID,
    ADDED_CATEGORY,
    DELETED_CATEGORY,
    UPDATED_CATEGORY,
    ADDED_PRODUCT
} from './types'
import {
    categoryDelByIdReq,
    categoryDelReq, categoryGetByIdReq,
    categoryGetReq,
    categoryPostReq,
    categoryUpdReq, productImgPostReq, productPostReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./mainReducer";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";
import {toClearImageArray} from "../../utils/templates/toClearImageArray";

const initialState={
    categories: [],
    categoryById: {}
}


export const categoryReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_CATEGORIES:
            return{
                ...state,
                categories: action.payload
            }
        case WRITE_CATEGORY_BY_ID:
            return{
                ...state,
                categoryById: action.payload
            }
        case ADDED_CATEGORY:
            return {
                ...state,
                categories: [
                    ...state.categories,
                    action.payload]
            }
        case DELETED_CATEGORY:
            return{
                ...state,
                categories: updateItemInStore(state.categories,action.payload,'delete')
            }
        case UPDATED_CATEGORY:
            return {
                ...state,
                categories: updateItemInStore(state.categories,action.payload,'update')
            }
        default:{
            return{
                ...state
            }
        }
    }
}


export const clearCategory = ()=>{
    return{
        type: WRITE_CATEGORY_BY_ID,
        action: undefined
    }
}
export const getCategory = ()=> {
    return async dispatch => getTemplate(dispatch, categoryGetReq, WRITE_CATEGORIES, toggleLoader)
}
export const getCategoryById = (id)=> {
    return async dispatch => getTemplate(dispatch, categoryGetByIdReq, WRITE_CATEGORY_BY_ID, toggleLoader,id)
}
export const createCategory = data=>{

        return async dispatch => {
            dispatch(toggleLoader(true))
            const formData = new FormData()


            formData.append('name',data.name)
            formData.append('description',data.description)
            toClearImageArray(data.image).map(item=>formData.append('image', item))
           formData.append('parentCategoryId',data.parentCategoryId)

            await categoryPostReq(formData).then( async resp=>{
                    dispatch({type: ADDED_CATEGORY,payload: resp.data.result})
                console.log(resp)
                }).catch(error=>console.log(error))
            dispatch(toggleLoader(false))
        }
}
export const deleteCategory = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
          await deleteTemplate(dispatch,categoryDelByIdReq,id[i],toggleLoader,DELETED_CATEGORY)
        }
    }
}
export const updateCategory = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,categoryUpdReq,data,UPDATED_CATEGORY,toggleLoader,id)
}

