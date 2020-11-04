import React from 'react'
import {ErrorMessage, Field, Form} from "formik";
import SelectorInput from "../SelectorInput/SelectorInput";
import ImgUploader from "../ImgUploader/ImgUploader";


const FormInput = ({
                name,
                label,
                placeholder,
                type=''
                   })=>{
    return(
        <div className="createOrEditField">
            <label htmlFor={name}>{label}</label>
            {type === 'selector' ?
                <Field name={name} placeholder={placeholder}>
                    {({field: {name, value}, form: {setFieldValue}}) => {
                    return (
                    <SelectorInput
                    setFieldValue={setFieldValue}
                    value={value}
                    name={name}
                    placeholder={placeholder}/>
                    )
                }}
                </Field>
                : type==='image' ?
                    <Field name="passport_photo" >
                    {({field:{name,value},form: { setFieldValue}}) =><ImgUploader setFieldValue={setFieldValue}
                                                                                  value={value}
                                                                                  name={name}/>}
                </Field>
            : <Field name={name} placeholder={placeholder}/>

            }

            <span  className='authError'><ErrorMessage name={name}/></span>
        </div>
    )
}

export default FormInput