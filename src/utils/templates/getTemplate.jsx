export const getTemplate = async (dispatch,getFunc, actionType,toggleLoader,id=null,showNotification)=>{
    dispatch(toggleLoader(true));
    let response = await getFunc(id).catch(()=>dispatch(showNotification({
        isOpen: true,
        title: 'Ошибка!',
        body:  'Не загружаются запись...'
    })));
    if(response?.result || response?.result===null) {
        dispatch({type: actionType, payload: response.result})
    }else{
        dispatch({type: actionType, payload: response})

    }
    dispatch(toggleLoader(false))

}