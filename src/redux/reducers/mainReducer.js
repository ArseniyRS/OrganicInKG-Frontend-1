import {
    //TOGGLE_AUTH,
    TOGGLE_FETCH_LOADER,
    //TOGGLE_PAGE_LOADER
} from './types'
//import {signIn} from "../../utils/api/Request";


const initialState={
   // pageLoader: true,
    isFetchLoader: false,
    //isAuthorized: {isAuth:false,role:''} //{isAuth: false, role: 'Employee'}
}


export const mainReducer = (state=initialState,action)=>{
    switch (action.type) {
        // case TOGGLE_AUTH:
        //     return {
        //         ...state,
        //         isAuthorized: action.payload
        //     }
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
// export const toggleAuth = value =>{
//     return{
//         type: 'TOGGLE_AUTH',
//         payload: value
//     }
// }
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

// export const signInAction = data =>{
//     return async dispatch =>{
//         dispatch(toggleLoader(true))
//         await signIn(data).then(response=>{
//             localStorage.setItem("id",response.data.id)
//             localStorage.setItem("token",response.data.token)
//             dispatch(toggleAuth({isAuth: true,role: roleChecker()}))
//             dispatch(toggleLoader(false))
//         }).catch(err=> dispatch(toggleLoader(false)))
//     }
// }


