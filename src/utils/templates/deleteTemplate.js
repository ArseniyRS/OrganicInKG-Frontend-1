export const deleteTemplate = async (dispatch,deleteFunc,id,toggleLoader)=>{
    dispatch(toggleLoader(true))
    await deleteFunc(id).then((resp)=>console.log(resp))
   .catch(resp=>console.log(resp))
    dispatch(toggleLoader(false))
}