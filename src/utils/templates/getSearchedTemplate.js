export const getSearchedTemplate = async (dispatch,getFunc, actionType,toggleLoader,page,searchText)=>{
    dispatch(toggleLoader(true));
    let response = await getFunc(searchText,page);
    console.log(response)
    if(response?.result) {
        dispatch({type: actionType, payload: response.result})
    }else{
        dispatch({type: actionType, payload: response})
    }
    dispatch(toggleLoader(false))
}