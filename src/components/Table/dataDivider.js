export const dataDivider = (data=[],pageNumber,dataCount)=>{

    let result = []
    if(data.length< dataCount){
        pageNumber=0
    }
    for (let i=pageNumber*dataCount,j=0;i<data.length;i++,j++){
        if(dataCount===j){
            return result
        }
        result.push(data[i])
    }
    return result
}

export const pageCounter = (data,dataCount)=>{

    let r=  Math.round(data/dataCount)
    let r2 =data%dataCount

    if(r2!==0){
        return r++
    }
    return r
}