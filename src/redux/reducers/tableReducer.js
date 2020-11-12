import { WRITE_RECORD_ID,WRITE_ELEMENTS_TO_DELETE} from './types'

const initialState={
   recordViewId:'',
    elementsToDelete: []
}


export const tableReducer = (state=initialState,action)=>{
    switch (action.type) {

        case WRITE_RECORD_ID:
            return{
                ...state,
                recordViewId: action.payload
            }
        case WRITE_ELEMENTS_TO_DELETE:
            return{
                ...state,
                elementsToDelete: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}

export const writeElementsToDelete = values=>{
    return{
        type:  WRITE_ELEMENTS_TO_DELETE,
        payload: values
    }
}
export const writeRecordId = value=>{
    return{
        type:  WRITE_RECORD_ID,
        payload: value
    }
}


