import {
    WRITE_PROVIDER,
    WRITE_PROVIDER_BY_ID,
    WRITE_ACTIVE_PROVIDERS,
    ADDED_PROVIDER,
    DELETED_PROVIDER, UPDATED_PROVIDER, SEARCHING, PROVIDER_TOGGLE_FETCH_LOADER,
} from './types'
import {
    providerGetByIdReq,
    providersGetReq,
    providerPostReq,
    providerUpdReq,
    providerDelByIdReq,
    providerActiveGetReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {formDataProviderTemplate} from "../../utils/templates/formDataTemplate";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";
import {checkHasData} from "../../utils/checkHasData";
import {getSearchedTemplate} from "../../utils/templates/getSearchedTemplate";

const initialState={
    providers: [],
    providerById: {},
    activeProviders: [],
    hasProvider: true,
    providerFetchLoader: false
}


export const providerReducer = (state=initialState,action)=>{
    switch (action.type) {
        case PROVIDER_TOGGLE_FETCH_LOADER:
            return{
                ...state,
                providerFetchLoader: action.payload
            }
        case WRITE_PROVIDER:
            return{
                ...state,
                providers: [...state.providers,...action.payload],
                hasProvider: checkHasData(action.payload)
            }
        case SEARCHING:
            return {
                ...state,
                providers: [],
                hasProvider: true
            }
        case WRITE_PROVIDER_BY_ID:
            return{
                ...state,
                providerById: action.payload
            }
        case WRITE_ACTIVE_PROVIDERS:
            return{
                ...state,
                activeProviders: action.payload
            }


        default:{
            return{
                ...state
            }
        }
    }
}
export const clearProvider = ()=>{
    return{
        type: WRITE_PROVIDER_BY_ID,
        action: undefined
    }
}
export const providerToggleLoader = bool=>{
    return{
        type: PROVIDER_TOGGLE_FETCH_LOADER,
        payload: bool
    }
}

export const getActiveProviders = (page)=>{
    return async dispatch => getTemplate(dispatch,providerActiveGetReq,WRITE_ACTIVE_PROVIDERS,providerToggleLoader,page)
}
export const getProviders = (page,searchText)=> {
    return async dispatch => getSearchedTemplate(dispatch, providersGetReq, WRITE_PROVIDER, providerToggleLoader,page,searchText)
}
export const getProviderById = (id)=> {
    return async dispatch => getTemplate(dispatch, providerGetByIdReq, WRITE_PROVIDER_BY_ID, providerToggleLoader,id)
}
export const createProvider = (data)=>{
        return async dispatch => {
            dispatch(providerToggleLoader(true))
            await providerPostReq(data)
                .then(resp => {

                    formDataProviderTemplate(resp.data.result.id,data,'PASSPORT')
                    formDataProviderTemplate(resp.data.result.id,data,'SERTIFICATE')
                    formDataProviderTemplate(resp.data.result.id,data,'CONTRACT')
                })
            dispatch(providerToggleLoader(false))
        }
}

export const deleteProvider = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,providerDelByIdReq,id[i],providerToggleLoader)
        }
    }
}
export const updateProvider = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,providerUpdReq,data,providerToggleLoader,id)
}

