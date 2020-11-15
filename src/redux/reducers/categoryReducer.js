import { WRITE_CATEGORIES,WRITE_CATEGORY_BY_ID} from './types'
import {
    categoryDelReq, categoryGetByIdReq,
    categoryGetReq,
    categoryPostReq,
    categoryUpdReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./mainReducer";

const initialState={
    categories: undefined,
    categoryById: undefined
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
    return async dispatch => createOrChangeTemplate(dispatch, categoryPostReq, data, toggleLoader).then(()=>getTemplate(dispatch, categoryGetReq, WRITE_CATEGORIES, toggleLoader))
}
export const deleteCategory = id =>{
    return async dispatch => deleteTemplate(dispatch,categoryDelReq,id,toggleLoader).then(()=>getTemplate(dispatch, categoryGetReq, WRITE_CATEGORIES, toggleLoader))
}
export const updateCategory = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,categoryUpdReq,data,toggleLoader,id).then(()=>getTemplate(dispatch, categoryGetReq, WRITE_CATEGORIES, toggleLoader))
}

