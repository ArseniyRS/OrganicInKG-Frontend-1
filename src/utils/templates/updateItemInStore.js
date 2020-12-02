export const updateItemInStore = (state,data,type)=>{
    let idx = -1;
    const newArrayData = [...state]
    switch (type) {
        case 'delete':
            idx = state.findIndex(item=>item.id === parseInt(data))
            return [...newArrayData.slice(0, idx), ...newArrayData.slice(idx + 1)]
        case 'update':
            idx = state.findIndex(item=>item.id === parseInt(data.id))
            return [...newArrayData.slice(0, idx),data, ...newArrayData.slice(idx + 1)]
        default:{
            return
        }
    }
}