

export const createOrChangeTemplate = async (dispatch,func,data,toggleLoader,id='')=>{
    dispatch(toggleLoader);
    await func(data,id).then(resp=>console.log(resp)).catch(err=>console.log(err.response))
    dispatch(toggleLoader)
}