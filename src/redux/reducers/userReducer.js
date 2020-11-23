import {WRITE_CATEGORIES, WRITE_USER_BY_ID, WRITE_USERS} from './types'
import {
    categoryDelByIdReq, categoryGetReq, userDelByIdReq,
    userDelReq, userGetByIdReq, usersGetReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./mainReducer";

const initialState={
    users: undefined,
    userById: undefined
}


export const userReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_USERS:
            return{
                ...state,
                users: action.payload
            }
        case WRITE_USER_BY_ID:
            return{
                ...state,
                userById: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}
export const clearUser = ()=>{
    return{
        type: WRITE_USER_BY_ID,
        action: undefined
    }
}
export const getUsers = ()=> {
    return async dispatch => getTemplate(dispatch, usersGetReq, WRITE_USERS, toggleLoader)
}
export const getUserById = (id)=> {
    return async dispatch => getTemplate(dispatch, userGetByIdReq, WRITE_USER_BY_ID, toggleLoader,id)
}
export const deleteUser = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,userDelByIdReq,id[i],toggleLoader)
        }
        await getTemplate(dispatch, usersGetReq, WRITE_CATEGORIES, toggleLoader)
        //deleteTemplate(dispatch,userDelReq,id,toggleLoader).then(()=>getTemplate(dispatch, usersGetReq, WRITE_USERS, toggleLoader))
    }
}


