import {
    WRITE_FAQ,
    WRITE_FAQ_BY_ID,
    ADDED_FAQ,
    DELETED_FAQ,
    UPDATED_FAQ, SEARCHING,FAQ_TOGGLE_FETCH_LOADER
} from './types'
import {
    faqDelByIdReq,
    faqGetByIdReq,
    faqGetReq,
    faqPostReq,
    faqUpdReq
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./mainReducer";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";
import {toClearImageArray} from "../../utils/templates/toClearImageArray";
import {checkHasData} from "../../utils/checkHasData";
import {getSearchedTemplate} from "../../utils/templates/getSearchedTemplate";

const initialState={
    faq: [],
    faqById: {},
    hasFaq: true,
    faqFetchLoader: false
}


export const faqReducer = (state=initialState,action)=>{
    switch (action.type) {
     case FAQ_TOGGLE_FETCH_LOADER:
                return{
                    ...state,
                    faqFetchLoader: action.payload
                }
        case WRITE_FAQ:
            return{
                ...state,
               faq: [...state.faq,...action.payload],
               hasFaq: checkHasData(action.payload)
            }
             case SEARCHING:
            return {
                ...state,
                faq: [],
                hasFaq: true
            }
        case WRITE_FAQ_BY_ID:
            return{
                ...state,
                faqById: action.payload
            }

        default:{
            return{
                ...state
            }
        }
    }
}
export const faqToggleLoader = bool=>{
    return{
        type: FAQ_TOGGLE_FETCH_LOADER,
        payload: bool
    }
}

export const getFaq = (page,searchText)=> {
    return async dispatch => getSearchedTemplate(dispatch, faqGetReq, WRITE_FAQ, faqToggleLoader,page,searchText)
}
export const getFaqById = (id)=> {
    return async dispatch => getTemplate(dispatch, faqGetByIdReq, WRITE_FAQ_BY_ID, faqToggleLoader,id)
}
export const createFaq = data=>{

    return async dispatch => createOrChangeTemplate(dispatch,faqPostReq,data,faqToggleLoader)
}
export const deleteFaq = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,faqDelByIdReq,id[i],faqToggleLoader)
        }
    }
}
export const updateFaq = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,faqUpdReq,data,faqToggleLoader,id)
}
export const clearFaq = ()=>{
    return{
        type: WRITE_FAQ_BY_ID,
        action: []
    }
}
