import {
    TOGGLE_AUTH,
    TOGGLE_FETCH_LOADER,
    //TOGGLE_PAGE_LOADER
} from './types'
import {authReq} from "../../utils/api/Request";
//import {signIn} from "../../utils/api/Request";


const initialState={
   // pageLoader: true,
    isFetchLoader: false,
    isAuthorized: false
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
        // case TOGGLE_PAGE_LOADER:
        //     return{
        //         ...state,
        //         pageLoader: action.payload
        //     }
        default:{
            return{
                ...state
            }
        }
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
// export const togglePageLoader = value=>{
//     return{
//         type: 'TOGGLE_PAGE_LOADER',
//         payload: value
//     }
// }

export const signIn = data =>{
    return async dispatch =>{
        dispatch(toggleLoader(true))
        await authReq(data).then(response=>{
            localStorage.setItem("token",response.result.body.accessToken)
            localStorage.setItem("token",response.result.body.tokenExpirationTime)
            localStorage.setItem("token",response.result.body.refreshExpirationTime)
            dispatch(toggleLoader(false))
        }).catch(err=> dispatch(toggleLoader(false)))
    }
}


