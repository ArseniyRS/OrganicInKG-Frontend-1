export const getTemplate = async (dispatch,getFunc, actionType,toggleLoader,id=null)=>{
    dispatch(toggleLoader(true));
    let response = await getFunc(id);
    console.log(response)
    dispatch({type:actionType,payload: response.result})
    dispatch(toggleLoader(false))
}