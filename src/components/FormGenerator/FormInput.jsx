import React, {useEffect} from 'react'
import {ErrorMessage, Field, Form} from "formik";
import SelectorInput from "../Inputs/SelectorInput/SelectorInput";
import ImgUploader from "../ImgUploader/ImgUploader";
import PhoneInput from "../Inputs/PhoneInput/PhoneInput";
import CheckInput from "../Inputs/CheckInput/CheckInput";


const FormInput = ({
                name,
                label,
                placeholder,
                type='',
                       options=[]
                   })=>{
    console.log(options)
    return(
        <div className="createOrEditField">
            <label htmlFor={name}>{label}</label>
            {type === 'selectInput' ?
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
                    <Field name={name} >
                    {({field:{name,value},form: { setFieldValue}}) =><ImgUploader setFieldValue={setFieldValue}
                                                                                  value={value}
                                                                                  name={name}/>}
                </Field>
                : type==='phone' ?
                    <Field name={name} >
                     {({field:{name},form: { setFieldValue}})=>  <PhoneInput setFieldValue={setFieldValue} name={name} />}
                    </Field>
                        : type==='check' ?
                            <Field   name={name} >
                                {({field:{name},form: { setFieldValue}})=><CheckInput setFieldValue={setFieldValue} name={name} />}
                          </Field>
                : type==='selector' ?
                            <Field name={name} as={'select'} placeholder={placeholder}>
                                <option value={null} className="select__placeholder" hidden>
                                    {placeholder}
                                </option>
                                {options.map(item=> {
                                    return (
                                        <option key={item.id} value={item.id}>{item.name}</option>
                                    )})
                                }
                            </Field>
                            :
                <Field name={name} placeholder={placeholder}/>

            }

            <span  className='authError'><ErrorMessage name={name}/></span>
        </div>
    )
}

export default FormInput