


export const tableDataSorter = (data,searchText='')=>{
    let word=''
    return data.filter(item=>{
        const objectPassing = (i)=>{
            for(let key in i){
                word += i[key]
            }
        }
        for(let key in item){
            if (typeof item[key] === 'object') {
                objectPassing(item[key])
            }else {
                word += item[key]
            }
        }
        return word.trim().toLowerCase().match(searchText)
})
}


