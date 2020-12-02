import {DELETED_USER,WRITE_USER_BY_ID, WRITE_USERS} from './types'
import {
    userDelByIdReq,
    userGetByIdReq, usersGetReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toggleLoader} from "./mainReducer";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";

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
        case DELETED_USER:
            return{
                ...state,
                users: updateItemInStore(state.users,action.payload,'delete')
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
            await deleteTemplate(dispatch,userDelByIdReq,id[i],toggleLoader,DELETED_USER)
        }
    }
}


