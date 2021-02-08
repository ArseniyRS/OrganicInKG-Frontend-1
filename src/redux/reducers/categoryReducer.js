import {
    WRITE_CATEGORIES,
    WRITE_CATEGORY_BY_ID,
    DELETED_CATEGORY,
    SEARCHING, CATEGORY_TOGGLE_FETCH_LOADER
} from './types'
import {
    categoryDelByIdReq,
    categoryGetByIdReq,
     categoryGetSearchReq,
    categoryPostReq,
    categoryUpdReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {createOrChangeTemplate} from "../../utils/templates/createOrChangeTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toClearImageArray} from "../../utils/templates/toClearImageArray";
import {getSearchedTemplate} from "../../utils/templates/getSearchedTemplate";
import {checkHasData} from "../../utils/checkHasData";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";

const initialState={
    categories: [],
    categoryById: {},
    searchedCategories: [],
    hasCategories: true,
    categoryFetchLoader: false
}


export const categoryReducer = (state=initialState,action)=>{
    switch (action.type) {
        case CATEGORY_TOGGLE_FETCH_LOADER:
            return{
                ...state,
                categoryFetchLoader: action.payload
            }
        case WRITE_CATEGORIES:
            return{
                ...state,
                categories: [...state.categories,...action.payload],
                hasCategories: checkHasData(action.payload)
            }
        case SEARCHING:
            return {
                ...state,
                categories: [],
                hasCategories: true
            }
        case WRITE_CATEGORY_BY_ID:
            return{
                ...state,
                categoryById: action.payload
            }
        case DELETED_CATEGORY:
            return{
                ...state,
                categories: updateItemInStore(state.categories,action.payload,'delete')
            }
        default:{
            return{
                ...state
            }
        }
    }
}


export const clearCategory = ()=>{
    return{
        type: WRITE_CATEGORY_BY_ID,
        action: undefined
    }
}
export const categoryToggleLoader = bool=>{
    return{
        type: 'CATEGORY_TOGGLE_FETCH_LOADER',
        payload: bool
    }
}

export const getCategory = (page,searchText)=> {
    return async dispatch => getSearchedTemplate(dispatch, categoryGetSearchReq, WRITE_CATEGORIES, categoryToggleLoader,page,searchText)
}
export const getCategoryById = (id)=> {
    return async dispatch => getTemplate(dispatch, categoryGetByIdReq, WRITE_CATEGORY_BY_ID, categoryToggleLoader,id)
}
export const createCategory = data=>{
        return async dispatch => {
                dispatch(categoryToggleLoader(true))
                const formData = new FormData()
                formData.append('categoryRequest', new Blob([JSON.stringify({
                    "name": `${data.name}`,
                    "description": data.description,
                    "parentCategoryId": data.parentCategoryId
                })], {type: "application/json"}));
                if (toClearImageArray(data.image) !== null) {
                    toClearImageArray(data.image).map(item => formData.append('image', item))
                } else {
                    formData.append('image', null)
                }
                await categoryPostReq(formData).catch(error => console.log(error.response))
                dispatch(categoryToggleLoader(false))
        }
}
export const deleteCategory = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
          await deleteTemplate(dispatch,categoryDelByIdReq,id[i],categoryToggleLoader,DELETED_CATEGORY)
        }
    }
}
export const updateCategory = (id,data) =>{
    return async dispatch => {
        dispatch(categoryToggleLoader(true))
        const formData = new FormData()
        formData.append('categoryRequest', new Blob([JSON.stringify({
            "id": data.id,
            "name": `${data.name}`,
            "description": data.description,
            "parentCategoryId": data.parentCategoryId
        })], {type: "application/json"}));
        if (toClearImageArray(data.image) !== null) {
            toClearImageArray(data.image).map(item => formData.append('image', item))
        } else {
            formData.append('image', null)
        }
        await categoryUpdReq(formData,id).catch(error => console.log(error.response))
        dispatch(categoryToggleLoader(false))
    }
}

