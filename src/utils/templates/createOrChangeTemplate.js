

export const createOrChangeTemplate = async (
    dispatch,
    func,
    data,
    toggleLoader,
    id='',
    showNotification
    )=>{

    dispatch(toggleLoader);
    await func(data,id).then(response => {
        const notifObj = {
            isOpen: true,
            title: response.data?.resultCode === 'DUPLICATE' ? 'Ошибка!' : 'Успех!',
            body: response.data?.resultCode === 'DUPLICATE' ? 'Такая запись уже есть в списке!' : id ? 'Запись изменена!':'Запись добавлена!'
        }
        dispatch(showNotification(notifObj))
    }).catch(()=>dispatch(showNotification({
        isOpen: true,
        title: 'Ошибка!',
        body:  id ? 'Запись не изменена!' :'Запись не добавлена!'
    })))
    dispatch(toggleLoader)
}