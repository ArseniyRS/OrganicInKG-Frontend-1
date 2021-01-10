export const toClearImageArray = data => {
    return data.length!==0 ? data.map(item=>item?.file ? item.file: item) : null
}