export const getTemplate = async (dispatch,getFunc, actionType,toggleLoader,id='')=>{
    dispatch(toggleLoader(true));
    let response = await getFunc(id);
    dispatch({type:actionType,payload: response})
    dispatch(toggleLoader(false))
}