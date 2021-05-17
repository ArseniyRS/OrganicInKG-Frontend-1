import * as Yup from "yup";


export const validationGenerator = (key, config)=>{
    console.log(key)
    let schema = {}
    for (let i=0;i<key.length;i++){
        for (let j=0;j<config.length;j++){
            if(key[i]===config[j]?.key){
                schema[key[i]]  =chooseSchema(config[j])
            }
        }
    }
    console.log(schema)
    return schema
}

const chooseSchema = (config)=>{
    let pattern
    if(config?.dataType) {
        switch (config.dataType) {
            case 'number': pattern = Yup.number();
                break;
            case 'array': pattern = Yup.array();
                break;
            case 'obj': pattern = Yup.object();
                break;
            default: pattern = Yup.string()
        }
    }
    else{ pattern = Yup.string()
    }
    if(config?.email){pattern = pattern.email(config.email)}
    if(config?.min){ pattern =   pattern.min(config.min.number,config.min.text + config.min.number)
    }
    if(config?.positive){ pattern =   pattern.positive(config.positive)
    }
    if(config?.required){ pattern =  pattern.required(config.required)
    }

    if(config?.max){ pattern =  pattern.max(config.max.number,config.max.text + config.max.number)
    }
    if(config?.nullable){ pattern =  pattern.nullable(config.nullable)
    }
    return pattern
}