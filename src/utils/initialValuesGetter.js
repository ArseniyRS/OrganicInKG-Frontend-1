export const initialValuesGetter = (obj,loadData)=>{
    const newObj ={}
    if(obj) {
        let oldObj = Object.values(obj).slice(1,obj.length)
        let objectKeys = Object.keys(obj).slice(1,obj.length)
        if (loadData) {
            objectKeys.map((item, index) => {

                if (typeof oldObj[index] === 'object' && oldObj[index] !== null) {
                   newObj[`${item}`] = oldObj[index].id
                }
                newObj[`${item}`] = oldObj[index]
            })
            return newObj
        }else {
            objectKeys.map(item => {
                newObj[`${item}`] = ''
            })
            return newObj
        }
    }
    return newObj
}