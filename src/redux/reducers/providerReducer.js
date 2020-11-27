import {WRITE_CATEGORIES, WRITE_CATEGORY_BY_ID, WRITE_PROVIDER, WRITE_PROVIDER_BY_ID,WRITE_ACTIVE_PROVIDERS} from './types'
import {
    providerDelReq,
    providerGetByIdReq,
    providersGetReq,
    providerPostReq,
    providerUpdReq,
    providerFilePostReq,
    categoryDelByIdReq,
    categoryGetReq,
    providerDelByIdReq,
    categoryPostReq,
    providerActiveGetReq
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./mainReducer";

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
        default:{
            return{
                ...state
            }
        }
    }
}
export const clearProvider = ()=>{
    return{
        type: WRITE_CATEGORY_BY_ID,
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
export const createProvider = (data,fileUploadKeys)=>{
        return async dispatch => createOrChangeTemplate(dispatch, providerPostReq, data, toggleLoader) .then(() => getTemplate(dispatch, providersGetReq, WRITE_PROVIDER, toggleLoader))
            //let fileArray = await fileCheck(data)
            // dispatch(toggleLoader(true))
            // await providerPostReq(data)
                // .then(response=>{
                // console.log(response)
                //     // for(let i=0;i<fileUploadKeys.length;i++){
                //     //     await providerFilePostReq({
                //     //         images:[fileArray[i]],
                //     //         supplierFileType: fileUploadKeys[i],
                //     //         supplierId: response.data.result.id
                //     //     })
                //     // }
                // }
                // )

            //     .catch(resp=>console.log(resp.message))
            // dispatch(toggleLoader(false))

       // }
            //.then(() => getTemplate(dispatch, providersGetReq, WRITE_PROVIDER, toggleLoader))
}
export const deleteProvider = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,providerDelByIdReq,id[i],toggleLoader)
        }
        await getTemplate(dispatch, providersGetReq, WRITE_CATEGORIES, toggleLoader)
        //deleteTemplate(dispatch,providerDelReq,id,toggleLoader).then(()=>getTemplate(dispatch, providersGetReq, WRITE_PROVIDER, toggleLoader))
    }
}
export const updateProvider = (id,data) =>{
    return async dispatch => createOrChangeTemplate(dispatch,providerUpdReq,data,toggleLoader,id).then(()=>getTemplate(dispatch, providersGetReq, WRITE_PROVIDER, toggleLoader))
}

const fileCheck = (values) => {
    const arrayValues = Object.values(values)
    const valuesKeys = Object.keys(values)
    let result = []
    for (let i = 0; i < valuesKeys.length; i++) {
        if (valuesKeys[i].indexOf("file_") !== -1) {
            result.push(arrayValues[i])
        }
    }
}