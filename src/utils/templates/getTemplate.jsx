export const getTemplate = async (dispatch,getFunc, actionType,toggleLoader,id=null)=>{
    dispatch(toggleLoader(true));
    let response = await getFunc(id);
    console.log(response)
    if(response?.result) {
        dispatch({type: actionType, payload: response.result})
    }else{
        dispatch({type: actionType, payload: response})

    }
    dispatch(toggleLoader(false))

}