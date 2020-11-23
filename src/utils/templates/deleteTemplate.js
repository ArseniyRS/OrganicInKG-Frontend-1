export const deleteTemplate = async (dispatch,deleteFunc,id,toggleLoader)=>{
    dispatch(toggleLoader(true))
    await deleteFunc(id).then(response=>{
        console.log(response)
        dispatch(toggleLoader(false))
    }).catch(resp=>console.log(resp))

}