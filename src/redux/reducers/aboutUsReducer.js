import {
    WRITE_ABOUT_US,
    WRITE_ABOUT_US_BY_ID,
    DELETED_ABOUT_US,
    SEARCHING, ABOUT_TOGGLE_FETCH_LOADER, WRITE_PRODUCT_BY_ID, CLEAR_CATEGORIES, CLEAR_ABOUT_US
} from './types'
import {
    aboutUsDelByIdReq,
    aboutUsGetByIdReq,
    aboutUsGetReq,
    aboutUsPostReq,
    aboutUsUpdReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";
import {checkHasData} from "../../utils/checkHasData";
import {getSearchedTemplate} from "../../utils/templates/getSearchedTemplate";
import {toggleNotification} from "./mainReducer";

const initialState={
    aboutUs: [],
    aboutUsById: {},
    hasAbout: true,
    aboutFetchLoader: false
}


export const aboutUsReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ABOUT_TOGGLE_FETCH_LOADER:
            return{
                ...state,
                aboutFetchLoader: action.payload
            }
        case WRITE_ABOUT_US:
            return{
                ...state,
                aboutUs: [...state.aboutUs,...action.payload],
                hasAbout: checkHasData(action.payload)
            }
        case CLEAR_ABOUT_US:
            return {
                ...state,
                aboutUs: []
            }
        case SEARCHING:
            return {
                ...state,
                aboutUs: [],
                hasAbout: true
            }
        case WRITE_ABOUT_US_BY_ID:
            return{
                ...state,
                aboutUsById: action.payload
            }
        case DELETED_ABOUT_US:
            return{
                ...state,
                aboutUs: updateItemInStore(state.aboutUs,action.payload,'delete')
            }
        default:{
            return{
                ...state
            }
        }
    }
}
export const clearAboutUses = ()=>{
    return{
        type: CLEAR_ABOUT_US
    }
}
export const aboutToggleLoader = bool=>{
    return{
        type: 'ABOUT_TOGGLE_FETCH_LOADER',
        payload: bool
    }
}

export const clearAboutUs = ()=>{
    return{
        type: WRITE_PRODUCT_BY_ID,
        action: undefined
    }
}
export const getAboutUs = (page,searchText)=> {
    return async dispatch => getSearchedTemplate(dispatch, aboutUsGetReq, WRITE_ABOUT_US, aboutToggleLoader,page,searchText,toggleNotification)
}
export const getAboutUsById = (id)=> {
    return async dispatch => getTemplate(dispatch, aboutUsGetByIdReq, WRITE_ABOUT_US_BY_ID, aboutToggleLoader,id,toggleNotification)
}
export const createAboutUs = data=>{
    return async dispatch => createOrChangeTemplate(dispatch,aboutUsPostReq,data,aboutToggleLoader,'',toggleNotification)
}
export const deleteAboutUs = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,aboutUsDelByIdReq,id[i],aboutToggleLoader,DELETED_ABOUT_US,toggleNotification)
        }
    }
}
export const updateAboutUs = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,aboutUsUpdReq,data,aboutToggleLoader,id,toggleNotification)
}

