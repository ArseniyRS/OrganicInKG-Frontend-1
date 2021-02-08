import {
    WRITE_ABOUT_US,
    WRITE_ABOUT_US_BY_ID,
    ADDED_ABOUT_US,
    DELETED_ABOUT_US,
    UPDATED_ABOUT_US, SEARCHING, ABOUT_TOGGLE_FETCH_LOADER, WRITE_CATEGORIES
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

export const aboutToggleLoader = bool=>{
    return{
        type: 'ABOUT_TOGGLE_FETCH_LOADER',
        payload: bool
    }
}
export const getAboutUs = (page,searchText)=> {
    return async dispatch => getSearchedTemplate(dispatch, aboutUsGetReq, WRITE_ABOUT_US, aboutToggleLoader,page,searchText)
}
export const getAboutUsById = (id)=> {
    return async dispatch => getTemplate(dispatch, aboutUsGetByIdReq, WRITE_ABOUT_US_BY_ID, aboutToggleLoader,id)
}
export const createAboutUs = data=>{

    return async dispatch => createOrChangeTemplate(dispatch,aboutUsPostReq,data,aboutToggleLoader)
}
export const deleteAboutUs = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,aboutUsDelByIdReq,id[i],aboutToggleLoader,DELETED_ABOUT_US)
        }
    }
}
export const updateAboutUs = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,aboutUsUpdReq,data,aboutToggleLoader,id)
}

