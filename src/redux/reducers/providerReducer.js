import {
    WRITE_PROVIDER,
    WRITE_PROVIDER_BY_ID,
    WRITE_ACTIVE_PROVIDERS,
    DELETED_PROVIDER, SEARCHING, PROVIDER_TOGGLE_FETCH_LOADER, CLEAR_PROVIDERS,
} from './types'
import {
    providerGetByIdReq,
    providersGetReq,
    providerPostReq,
    providerUpdReq,
    providerDelByIdReq,
    providerActiveGetReq, providerPlaceOfProductionPostReq, providerPlaceOfProductionUpdReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {formDataProviderTemplate} from "../../utils/templates/formDataTemplate";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";
import {checkHasData} from "../../utils/checkHasData";
import {getSearchedTemplate} from "../../utils/templates/getSearchedTemplate";
import {toggleNotification} from "./mainReducer";

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
        case CLEAR_PROVIDERS:
            return {
                ...state,
                providers: []
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

        case DELETED_PROVIDER:
            return{
                ...state,
                providers: updateItemInStore(state.providers,action.payload,'delete')
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
export const clearProviders = ()=>{
    return{
        type: CLEAR_PROVIDERS
    }
}
export const clearActiveProviders = ()=>{
    return{
        type: WRITE_ACTIVE_PROVIDERS,
        payload: []
    }
}
export const providerToggleLoader = bool=>{
    return{
        type: PROVIDER_TOGGLE_FETCH_LOADER,
        payload: bool
    }
}

export const getActiveProviders = (page)=>{
    return async dispatch => getTemplate(dispatch,providerActiveGetReq,WRITE_ACTIVE_PROVIDERS,providerToggleLoader,page,toggleNotification)
}
export const getProviders = (page,searchText)=> {
    return async dispatch => getSearchedTemplate(dispatch, providersGetReq, WRITE_PROVIDER, providerToggleLoader,page,searchText,toggleNotification)
}
export const getProviderById = (id)=> {
    return async dispatch => getTemplate(dispatch, providerGetByIdReq, WRITE_PROVIDER_BY_ID, providerToggleLoader,id,toggleNotification)
}
export const createProvider = (data)=>{
    console.log(data)
        return async dispatch => {
            dispatch(providerToggleLoader(true))
            await providerPlaceOfProductionPostReq(data.placeOfProduction).then(async res=> {
                const newData = data
                newData['placeOfProductionId'] = res.data.result.id
                await providerPostReq(newData)
                    .then(resp => {
                        if(data.PASSPORT.length) {
                            formDataProviderTemplate(resp.data.result.id, data, 'PASSPORT')
                        }
                        if(data.SERTIFICATE.length) {
                            formDataProviderTemplate(resp.data.result.id, data, 'SERTIFICATE')
                        }
                        if(data.CONTRACT.length) {
                            formDataProviderTemplate(resp.data.result.id, data, 'CONTRACT')
                        }
                    }).then(response=>dispatch(toggleNotification({
                        isOpen: true,
                        title: response.data?.resultCode === 'DUPLICATE' ? 'Ошибка!' : 'Успех!',
                        body: response.data?.resultCode === 'DUPLICATE' ? 'Такая запись уже есть в списке!' :'Запись добавлена!'
                    })))
                    .catch(() => dispatch(toggleNotification({
                        isOpen: true,
                        title: 'Ошибка!',
                        body:  'Запись не добавлена!'
                    })))
                dispatch(providerToggleLoader(false))
            })
        }
}
export const deleteProvider = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,providerDelByIdReq,id[i],providerToggleLoader,DELETED_PROVIDER,toggleNotification)
        }
    }
}
export const updateProvider = (id,data) =>{
    return async dispatch => {
        dispatch(providerToggleLoader(true))
        await providerPlaceOfProductionUpdReq(data.placeOfProduction,data.placeOfProduction.id).then(async res=> {
            const newData = data
            newData['placeOfProductionId'] = res.data.result.id
            await providerUpdReq(newData,id)
                .then(resp => {
                    if(data.PASSPORT.length) {
                        formDataProviderTemplate(resp.data.result.id, data, 'PASSPORT')
                    }
                    if(data.SERTIFICATE.length) {
                        formDataProviderTemplate(resp.data.result.id, data, 'SERTIFICATE')
                    }
                    if(data.CONTRACT.length) {
                        formDataProviderTemplate(resp.data.result.id, data, 'CONTRACT')
                    }
                }).then(response=>dispatch(toggleNotification({
                    isOpen: true,
                    title: response.data?.resultCode === 'DUPLICATE' ? 'Ошибка!' : 'Успех!',
                    body: response.data?.resultCode === 'DUPLICATE' ? 'Такая запись уже есть в списке!' :'Запись изменена!'
                })))
                .catch(() => dispatch(toggleNotification({
                    isOpen: true,
                    title: 'Ошибка!',
                    body:  'Запись не изменена!'
                })))
            dispatch(providerToggleLoader(false))
        })
    }
}

