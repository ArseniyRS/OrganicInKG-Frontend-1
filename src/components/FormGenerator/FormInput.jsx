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
               selectInputData=[],
               selectorProperty,
               options=[]
                   })=>{
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
                    data={selectInputData}
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
                                {({field:{name,value},form: { setFieldValue}})=><CheckInput value={value} setFieldValue={setFieldValue} name={name} />}
                          </Field>
                : type==='selector' ?
                            <Field name={name} as={'select'} placeholder={placeholder}>
                                <option value={''} className="select__placeholder" hidden>
                                    {placeholder}
                                </option>
                                <option value={''} className="select__placeholder">
                                    {'Без родителя'}
                                </option>
                                {options[selectorProperty].map(item=> {
                                    return (
                                        <option key={item.id} value={item.id}>{item?.name ? item.name : item.fullName}</option>
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