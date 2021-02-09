import {
    TOGGLE_AUTH,
    TOGGLE_FETCH_LOADER,
    TOGGLE_PAGE_LOADER,
    WRITE_AUTH_MESSAGE,
    WRITE_USERNAME,
    WRITE_USER_ID,
    TOGGLE_NOTIFICATION
} from './types'
import {authRefreshReq, authReq, userGetByIdReq} from "../../utils/api/Request";
import {logout} from "../../components/Auth/logout";


const initialState={
    authFetchLoader: false,
    isAuthorized: true,
    isPageLoader: false,
    authErrorMessage: '',
    username: '',
    userId: undefined,
    notification: {
        isOpen: false,
        title: '',
        body: ''
    }
}


export const mainReducer = (state=initialState,action)=>{
    switch (action.type) {
        case TOGGLE_NOTIFICATION:
            console.log('called')
            return {
                ...state,
                notification: action.payload
            }

        case TOGGLE_AUTH:
            return {
                ...state,
                isAuthorized: action.payload
            }
        case TOGGLE_FETCH_LOADER:
            return{
                ...state,
                authFetchLoader: action.payload
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
                username: action.payload,
            }
        case WRITE_USER_ID:
        return {
            ...state,
            userId: action.payload
        }

        default:{
            return{
                ...state
            }
        }
    }
}

export const toggleNotification = notif=>{
    return{
        type: TOGGLE_NOTIFICATION,
        payload: notif
    }
}
export const writeUserId = value=>{
    return{
        type: 'WRITE_USER_ID',
        payload: value
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
            if(response.resultCode==='NOT_FOUND'){
                logout()
            }else {
                dispatch(tokenToLocalStorage(response))
                dispatch(getUserName())
            }
        })
        dispatch(toggleLoader(false))
    }
}
export const getUserName=()=>{
    return async dispatch=>{
        dispatch(toggleLoader(true))
        await userGetByIdReq(localStorage.getItem('id')).then(response=>{
            dispatch(writeUsername(response.result?.firstName ? response.result?.firstName : response.result?.phoneNumber))
        })
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
                dispatch(toggleAuth(true))
                dispatch(tokenToLocalStorage(response))
                dispatch(getUserName())
            }
        })
        dispatch(toggleLoader(false))
    }
}

const tokenToLocalStorage = (response)=>{
    localStorage.setItem("accessToken", response.result.body.accessToken)
    localStorage.setItem("tokenExpirationTime", JSON.stringify(Date.parse(response.result.body.tokenExpirationTime)))
    localStorage.setItem("refreshExpirationTime", JSON.stringify(Date.parse(response.result.body.refreshExpirationTime)))
    localStorage.setItem("id", response.result.body.id)
    localStorage.setItem("refreshToken", response.result.body.refreshToken)
}


