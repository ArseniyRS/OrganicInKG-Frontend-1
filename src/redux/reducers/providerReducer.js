import {
    WRITE_PROVIDER,
    WRITE_PROVIDER_BY_ID,
    WRITE_ACTIVE_PROVIDERS,
    ADDED_PROVIDER,
    DELETED_PROVIDER, UPDATED_PROVIDER
} from './types'
import {
    providerGetByIdReq,
    providersGetReq,
    providerPostReq,
    providerUpdReq,
    providerDelByIdReq,
    providerActiveGetReq
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./mainReducer";
import {formDataProviderTemplate} from "../../utils/templates/formDataTemplate";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";

const initialState={
    providers: undefined,
    providerById: undefined,
    activeProviders: undefined
}


export const providerReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_PROVIDER:
            return{
                ...state,
                providers: action.payload
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

        case ADDED_PROVIDER:
            return {
                ...state,
                providers: [
                    ...state.providers,
                    action.payload]
            }
        case DELETED_PROVIDER:
            return{
                ...state,
                providers: updateItemInStore(state.providers,action.payload,'delete')
            }
        case UPDATED_PROVIDER:
            return {
                ...state,
                providers: updateItemInStore(state.providers,action.payload,'update')
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
export const getActiveProviders = ()=>{
    return async dispatch => getTemplate(dispatch,providerActiveGetReq,WRITE_ACTIVE_PROVIDERS,toggleLoader)
}
export const getProviders = ()=> {
    return async dispatch => getTemplate(dispatch, providersGetReq, WRITE_PROVIDER, toggleLoader)
}
export const getProviderById = (id)=> {
    return async dispatch => getTemplate(dispatch, providerGetByIdReq, WRITE_PROVIDER_BY_ID, toggleLoader,id)
}
export const createProvider = (data)=>{
        return async dispatch => {
            dispatch(toggleLoader(true))
            await providerPostReq(data)
                .then(resp => {
                    dispatch({type:ADDED_PROVIDER,payload: resp.data.result})
                    formDataProviderTemplate(resp.data.result.id,data,'PASSPORT')
                    formDataProviderTemplate(resp.data.result.id,data,'SERTIFICATE')
                    formDataProviderTemplate(resp.data.result.id,data,'CONTRACT')
                })

        }
}

export const deleteProvider = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,providerDelByIdReq,id[i],toggleLoader,DELETED_PROVIDER)
        }
    }
}
export const updateProvider = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,providerUpdReq,data,UPDATED_PROVIDER,toggleLoader,id)
}

