import { WRITE_RECORD_ID} from './types'

const initialState={
   recordViewId:''
}


export const tableReducer = (state=initialState,action)=>{
    switch (action.type) {

        case WRITE_RECORD_ID:
            return{
                ...state,
                recordViewId: action.payload
            }
        default:{
            return{
                ...state
            }
        }
    }
}


export const writeRecordId = value=>{
    return{
        type:  WRITE_RECORD_ID,
        payload: value
    }
}


