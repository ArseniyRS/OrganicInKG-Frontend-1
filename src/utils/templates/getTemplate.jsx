export const getTemplate = async (dispatch,getFunc, actionType,toggleLoader,id=null)=>{
    dispatch(toggleLoader(true));
    let response = await getFunc(id);
    dispatch({type:actionType,payload: response.result})
    dispatch(toggleLoader(false))

}