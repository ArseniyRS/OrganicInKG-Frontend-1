

export const createOrChangeTemplate = async (dispatch,func,data,toggleLoader,id='')=>{
    dispatch(toggleLoader);
    await func(data,id).then(rep=>console.log(rep)).catch(err=>console.log(err.response))
    dispatch(toggleLoader)
}