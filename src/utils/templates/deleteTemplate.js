
export const deleteTemplate = async (dispatch,deleteFunc,id,toggleLoader,actionType,showNotification)=>{
    dispatch(toggleLoader(true))
    await deleteFunc(id).then(()=>{
        dispatch(showNotification({
            isOpen: true,
            title:  'Успех!',
            body: 'Запись удалена!'
        }))
        dispatch({type:actionType,payload: id})
    })
   .catch(()=>{
       dispatch(showNotification({
           isOpen: true,
           title: 'Ошибка!',
           body:  'Запись не удалена!'
       }))
   })
    dispatch(toggleLoader(false))
}