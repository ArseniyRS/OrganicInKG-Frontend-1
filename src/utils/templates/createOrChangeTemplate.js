

export const createOrChangeTemplate = async (
    dispatch,
    func,
    data,
    toggleLoader,
    id=''
    )=>{
    dispatch(toggleLoader);
    await func(data,id)
    dispatch(toggleLoader)
}