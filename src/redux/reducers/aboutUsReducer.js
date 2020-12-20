import {
    WRITE_ABOUT_US,
    WRITE_ABOUT_US_BY_ID,
    ADDED_ABOUT_US,
    DELETED_ABOUT_US,
    UPDATED_ABOUT_US,
} from './types'
import {
    aboutUsDelByIdReq,
    aboutUsGetByIdReq,
    aboutUsGetReq,
    aboutUsPostReq,
    aboutUsUpdReq
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./mainReducer";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";

const initialState={
    aboutUs: [],
    aboutUsById: {}
}


export const aboutUsReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_ABOUT_US:
            return{
                ...state,
                aboutUs: action.payload
            }
        case WRITE_ABOUT_US_BY_ID:
            return{
                ...state,
                aboutUsById: action.payload
            }
        case ADDED_ABOUT_US:
            return {
                ...state,
                aboutUs: [
                    ...state.aboutUs,
                    action.payload]
            }
        case DELETED_ABOUT_US:
            return{
                ...state,
                aboutUs: updateItemInStore(state.aboutUs,action.payload,'delete')
            }
        case UPDATED_ABOUT_US:
            return {
                ...state,
                aboutUs: updateItemInStore(state.aboutUs,action.payload,'update')
            }
        default:{
            return{
                ...state
            }
        }
    }
}


export const getAboutUs = ()=> {
    return async dispatch => getTemplate(dispatch, aboutUsGetReq, WRITE_ABOUT_US, toggleLoader)
}
export const getAboutUsById = (id)=> {
    return async dispatch => getTemplate(dispatch, aboutUsGetByIdReq, WRITE_ABOUT_US_BY_ID, toggleLoader,id)
}
export const createAboutUs = data=>{

    return async dispatch => createOrChangeTemplate(dispatch,aboutUsPostReq,data,ADDED_ABOUT_US,toggleLoader)
}
export const deleteAboutUs = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,aboutUsDelByIdReq,id[i],toggleLoader,DELETED_ABOUT_US)
        }
    }
}
export const updateAboutUs = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,aboutUsUpdReq,data,UPDATED_ABOUT_US,toggleLoader,id)
}

