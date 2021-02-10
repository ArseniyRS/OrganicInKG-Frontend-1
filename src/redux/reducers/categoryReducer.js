import {
    WRITE_CATEGORIES,
    WRITE_CATEGORY_BY_ID,
    DELETED_CATEGORY,
    SEARCHING, CATEGORY_TOGGLE_FETCH_LOADER, CLEAR_CATEGORIES
} from './types'
import {
    categoryDelByIdReq,
    categoryGetByIdReq,
     categoryGetSearchReq,
    categoryPostReq,
    categoryUpdReq,
} from "../../utils/api/Request";
import {getTemplate} from "../../utils/templates/getTemplate";
import {deleteTemplate} from "../../utils/templates/deleteTemplate";
import {toClearImageArray} from "../../utils/templates/toClearImageArray";
import {getSearchedTemplate} from "../../utils/templates/getSearchedTemplate";
import {checkHasData} from "../../utils/checkHasData";
import {updateItemInStore} from "../../utils/templates/updateItemInStore";
import {toggleNotification} from "./mainReducer";

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
        case CLEAR_CATEGORIES:
            return {
                ...state,
                categories: [],
                hasCategories: true,
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
export const clearCategories = ()=>{
    return{
        type: CLEAR_CATEGORIES
    }
}

export const clearCategory = ()=>{
    return{
        type: WRITE_CATEGORY_BY_ID,
    }
}
export const categoryToggleLoader = bool=>{
    return{
        type: 'CATEGORY_TOGGLE_FETCH_LOADER',
        payload: bool
    }
}

export const getCategory = (page,searchText)=> {
    return async dispatch => getSearchedTemplate(dispatch, categoryGetSearchReq, WRITE_CATEGORIES, categoryToggleLoader,page,searchText,toggleNotification)
}
export const getCategoryById = (id)=> {
    return async dispatch => getTemplate(dispatch, categoryGetByIdReq, WRITE_CATEGORY_BY_ID, categoryToggleLoader,id,toggleNotification)
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
                if (toClearImageArray(data.image) !== null && data.parentCategoryId===null) {
                    toClearImageArray(data.image).map(item => formData.append('image', item))
                } else {
                    formData.append('image', null)
                }
                await categoryPostReq(formData).then(response=>dispatch(toggleNotification({
                    isOpen: true,
                    title: response.data?.resultCode === 'DUPLICATE' ? 'Ошибка!' : 'Успех!',
                    body: response.data?.resultCode === 'DUPLICATE' ? 'Такая запись уже есть в списке!' :'Запись добавлена!'
                })))
                    .catch(() => dispatch(toggleNotification({
                        isOpen: true,
                        title: 'Ошибка!',
                        body:  'Запись не добавлена!'
                    })))
                dispatch(categoryToggleLoader(false))
        }
}
export const deleteCategory = id =>{
    return async dispatch => {
        for(let i=0;i<id.length;i++){
          await deleteTemplate(dispatch,categoryDelByIdReq,id[i],categoryToggleLoader,DELETED_CATEGORY,toggleNotification)
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

        if (toClearImageArray(data.image) !== null && data.parentCategoryId===null) {
            toClearImageArray(data.image).map(item => formData.append('image', item))
        } else {
            formData.append('image', null)
        }
        await categoryUpdReq(formData,id)
            .then(response=>dispatch(toggleNotification({
                isOpen: true,
                title: response.data?.resultCode === 'DUPLICATE' ? 'Ошибка!' : 'Успех!',
                body: response.data?.resultCode === 'DUPLICATE' ? 'Такая запись уже есть в списке!' :'Запись изменена!'
            })))
            .catch(() => dispatch(toggleNotification({
                isOpen: true,
                title: 'Ошибка!',
                body:  'Запись не изменена!'
            })))
        dispatch(categoryToggleLoader(false))
    }
}

