import * as Yup from "yup";

export const validationGenerator = (key, config)=>{
    let schema = {}
    key.map((item,index)=> {
        if(config[index]?.dataType) {
            switch (config[index].dataType) {
                case 'number':
                    schema[item] = Yup.number();
                    break;
                default:
                    schema[item] = Yup.string()
            }
        }
            else{
                schema[item] = Yup.string()
            }



        if(config[index]?.required){
            schema[item] =  schema[item].required(config[index].required)
        }
        if(config[index]?.min){
            schema[item] =  schema[item].min(config[index].min)
        }
        if(config[index]?.max){
            schema[item] =  schema[item].min(config[index].max)
        }
        if(config[index]?.nullable){
            schema[item] =  schema[item].nullable(config[index].nullable)
        }
    })
    return schema
}