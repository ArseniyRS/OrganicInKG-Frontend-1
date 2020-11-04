import * as Yup from "yup";

export const validationGenerator = (key, config)=>{
    let schema = {}
    key.map((item,index)=> {
        schema[item] = Yup.string()
        if(config[index]?.required){
            schema[item] =  schema[item].required(config[index].required)
        }
        if(config[index]?.min){
            schema[item] =  schema[item].min(config[index].min)
        }
        if(config[index]?.max){
            schema[item] =  schema[item].min(config[index].max)
        }
    })
    return schema
}