import { TOGGLE_MODAL} from './types'

const initialState={
    isOpenModal: {
        isOpen:false,
        title:'',
        confirmFunc: undefined,
        urlToTable : ''
    }
}


export const modalReducer = (state=initialState,action)=>{
    switch (action.type) {

        case TOGGLE_MODAL:
            return{
                ...state,
                isOpenModal: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}


export const toggleModal = obj=>{
    return{
        type:  TOGGLE_MODAL,
        payload: obj
    }
}


