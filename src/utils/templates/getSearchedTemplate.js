export const getSearchedTemplate = async (dispatch,getFunc, actionType,toggleLoader,page,searchText,showNotification)=>{
    dispatch(toggleLoader(true));
    let response = await getFunc(searchText,page).catch(()=>dispatch(showNotification({
        isOpen: true,
        title: 'Ошибка!',
        body:  'Не загружаются записи...'
    })))
    console.log(response)
    if(response?.result) {
        dispatch({type: actionType, payload: response.result})
    }else{
        dispatch({type: actionType, payload: response})
    }
    dispatch(toggleLoader(false))
}