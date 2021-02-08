export const deleteTemplate = async (dispatch,deleteFunc,id,toggleLoader,actionType)=>{
    dispatch(toggleLoader(true))
    await deleteFunc(id).then(()=>dispatch({type:actionType,payload: id}))
   .catch(resp=>console.log(resp))
    dispatch(toggleLoader(false))
}