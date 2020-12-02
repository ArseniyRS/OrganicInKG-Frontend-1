export const deleteTemplate = async (dispatch,deleteFunc,id,toggleLoader,actionType)=>{
    dispatch(toggleLoader(true))
    dispatch({type:actionType,payload: id})
    await deleteFunc(id).then((resp)=>console.log(resp))
   .catch(resp=>console.log(resp))
    dispatch(toggleLoader(false))
}