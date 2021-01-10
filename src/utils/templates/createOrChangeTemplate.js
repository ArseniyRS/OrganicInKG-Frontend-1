

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
        if(resp.data?.result) {
            return dispatch({type: actionType, payload: resp.data.result})
        }
        return dispatch({type: actionType, payload: resp.data})

    })
    dispatch(toggleLoader)
}