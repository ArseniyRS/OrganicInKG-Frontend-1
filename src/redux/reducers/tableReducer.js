import { TOGGLE_CARD} from './types'

const initialState={
    card: {isOpen: false,row_id:''},
}


export const tableReducer = (state=initialState,action)=>{
    switch (action.type) {

        case TOGGLE_CARD:
            return{
                ...state,
                card: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}


export const toggleCard = obj=>{
    return{
        type:  TOGGLE_CARD,
        payload: obj
    }
}


