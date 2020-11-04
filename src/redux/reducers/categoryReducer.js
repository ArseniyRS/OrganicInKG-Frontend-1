import { WRITE_CATEGORIES} from './types'
import {
    categoryDelReq,
    categoryGetReq,
    categoryPostReq,
    categoryUpdReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./mainReducer";

const initialState={
    categories: []
}


export const categoryReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_CATEGORIES:
            return{
                ...state,
                categories: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}

export const getCategory = ()=> {
    return async dispatch => getTemplate(dispatch, categoryGetReq, WRITE_CATEGORIES, toggleLoader)
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

