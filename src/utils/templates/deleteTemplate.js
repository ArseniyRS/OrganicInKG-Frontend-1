export const deleteTemplate = async (dispatch,deleteFunc,id,toggleLoader)=>{
    dispatch(toggleLoader(true))
    await deleteFunc(id)
    dispatch(toggleLoader(false))
}