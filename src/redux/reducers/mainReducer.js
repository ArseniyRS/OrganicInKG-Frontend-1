import {
    TOGGLE_AUTH,
    TOGGLE_FETCH_LOADER,
    TOGGLE_PAGE_LOADER,
    WRITE_AUTH_MESSAGE,
    WRITE_USERNAME
} from './types'
import {authRefreshReq, authReq, userGetByIdReq} from "../../utils/api/Request";


const initialState={
    isFetchLoader: false,
    isAuthorized: true,
    isPageLoader: false,
    authErrorMessage: undefined,
    username: undefined
}


export const mainReducer = (state=initialState,action)=>{
    switch (action.type) {
        case TOGGLE_AUTH:
            return {
                ...state,
                isAuthorized: action.payload
            }
        case TOGGLE_FETCH_LOADER:
            return{
                ...state,
                isFetchLoader: action.payload
            }
        case TOGGLE_PAGE_LOADER:
            return{
                ...state,
                isPageLoader: action.payload

        }
        case WRITE_AUTH_MESSAGE:
            return {
                ...state,
                authErrorMessage: action.payload
            }
        case WRITE_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}
const writeUsername = value=>{
    return{
        type: 'WRITE_USERNAME',
        payload: value
    }
}
export const writeAuthMessage = str =>{
    return{
        type: 'WRITE_AUTH_MESSAGE',
        payload: str
    }
}
export const togglePageLoader = bool =>{
    return{
        type: 'TOGGLE_PAGE_LOADER',
        payload: bool
    }
}
export const toggleAuth = value =>{
    return{
        type: 'TOGGLE_AUTH',
        payload: value
    }
}
export const toggleLoader = bool=>{
    return{
        type: 'TOGGLE_FETCH_LOADER',
        payload: bool
    }
}

export const authRefresh = data=> {
    return async dispatch => {
        dispatch(toggleLoader(true))
        await authRefreshReq(data).then(async response => {
            localStorage.setItem("accessToken", response.result.body.accessToken)
            localStorage.setItem("tokenExpirationTime", response.result.body.tokenExpirationTime)
            localStorage.setItem("refreshExpirationTime", response.result.body.refreshExpirationTime)
            localStorage.setItem("id", response.result.body.id)
            localStorage.setItem("refreshToken", response.result.body.refreshToken)
            await userGetByIdReq(response.result.body.id).then(response=>{
                console.log(response)
                dispatch(writeUsername(response.result.phoneNumber))
            })
            console.log(response)
            dispatch(toggleAuth(true))
        }).catch(err => console.log(err))
        dispatch(toggleLoader(false))
    }
}
export const authSignIn = data =>{
    return async dispatch =>{
        dispatch(toggleLoader(true))
        await authReq(data).then(async response=>{
            console.log(response)
            if(response.result.statusCodeValue===400){
                dispatch(writeAuthMessage('Неверно введены данные.'))
            }else {
                dispatch(togglePageLoader(true))
                localStorage.setItem("accessToken", response.result.body.accessToken)
                localStorage.setItem("tokenExpirationTime", JSON.stringify(Date.parse(response.result.body.tokenExpirationTime)))
                localStorage.setItem("refreshExpirationTime", JSON.stringify(Date.parse(response.result.body.refreshExpirationTime)))
                localStorage.setItem("id", response.result.body.id)
                localStorage.setItem("refreshToken", response.result.body.refreshToken)
                await userGetByIdReq(response.result.body.id).then(response=>{
                    console.log(response)
                    dispatch(writeUsername(response.result.phoneNumber))
                })

                setTimeout(()=>dispatch(togglePageLoader(false)),4000)
            }
            dispatch(toggleAuth(true))
        })
        dispatch(toggleLoader(false))
    }
}


