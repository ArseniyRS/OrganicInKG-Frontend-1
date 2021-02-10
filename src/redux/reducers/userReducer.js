import {CLEAR_USERS, DELETED_USER, SEARCHING, USER_TOGGLE_FETCH_LOADER, WRITE_USER_BY_ID, WRITE_USERS} from './types'
import {

    userDelByIdReq,
    userGetByIdReq, usersGetReq, userUpdReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {checkHasData} from "../../utils/checkHasData";
import {getSearchedTemplate} from "../../utils/templates/getSearchedTemplate";
import {toggleNotification} from "./mainReducer";

const initialState={
    users: [],
    userById: {},
    hasUsers: true,
    userFetchLoader: false
}


export const userReducer = (state=initialState,action)=>{
    switch (action.type) {
        case WRITE_USERS:
            return{
                ...state,
                users: [...state.users,...action.payload],
                hasUsers: checkHasData(action.payload)
            }
        case USER_TOGGLE_FETCH_LOADER:
            return{
                ...state,
                userFetchLoader: action.payload
            }
        case SEARCHING:
            return {
                ...state,
                users: [],
                hasUsers: true
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: [],
                hasUsers: true,

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
export const userToggleLoader = bool=>{
    return{
        type: USER_TOGGLE_FETCH_LOADER,
        payload: bool
    }
}

export const clearUsers = ()=>{
    return{
        type: CLEAR_USERS
    }
}
export const getUsers = (page,searchText)=> {
    return async dispatch => getSearchedTemplate(dispatch, usersGetReq, WRITE_USERS, userToggleLoader,page,searchText,toggleNotification)
}
export const getUserById = (id)=> {
    return async dispatch => getTemplate(dispatch, userGetByIdReq, WRITE_USER_BY_ID, userToggleLoader,id,toggleNotification)
}
export const deleteUser = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
            await deleteTemplate(dispatch,userDelByIdReq,id[i],userToggleLoader,DELETED_USER,toggleNotification)
        }
    }
}

export const updateUser = (data,id)=>{
    return async dispatch =>createOrChangeTemplate(dispatch,userUpdReq,data,userToggleLoader,id)
}


