

export const createOrChangeTemplate = async (
    dispatch,
    func,
    data,
    actionType,
    toggleLoader,
    id=''

    )=>{
    dispatch(toggleLoader);
    await func(data,id).then(resp=>{
        console.log(resp)
        dispatch({type:actionType,payload: resp.data.result})
    }).catch(err=>console.log(err.response))
    dispatch(toggleLoader)
}