import React, {useEffect} from 'react'
import {ErrorMessage, Field, Form} from "formik";
import SelectorInput from "../Inputs/SelectorInput/SelectorInput";
import ImgUploader from "../ImgUploader/ImgUploader";
import PhoneInput from "../Inputs/PhoneInput/PhoneInput";
import CheckInput from "../Inputs/CheckInput/CheckInput";
import SelectField from "../Inputs/Selector/SelectField";
import MapBlock from "../Inputs/MapBlock/MapBlock";


const FormInput = ({
                name,
                label,
                placeholder,
                type='',
               selectInputData=[],
               selectorProperty,
               options=[],
                       clearSelectorData,
                       fileTypes,
                       imageCount,
                       readOnly=false,
    ...props
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
                    placeholder={placeholder}
                    />
                    )
                }}
                </Field>

                : type==='phone' ?
                    <Field name={name} >
                     {({field:{name,value},form: { setFieldValue}})=>  <PhoneInput setFieldValue={setFieldValue} name={name} value={value}/>}
                    </Field>
                        : type==='check' ?
                            <Field   name={name} >
                                {({field:{name,value},form: { setFieldValue}})=><CheckInput value={value} setFieldValue={setFieldValue} name={name} />}
                          </Field>
                : type==='selector' ?
                            <Field name={name} placeholder={placeholder}>
                                {({field: {name, value}, form: {setFieldValue}}) => {
                                   return <SelectField
                                       data={options[selectorProperty]}
                                       setFieldValue={setFieldValue}
                                       value={value}
                                       name={name}
                                       placeholder={placeholder}
                                   />
                                }}
                                </Field>


                : type==='textarea' ?
                    <Field name={name} as={'textarea'} placeholder={placeholder} />

                : type==='image' ?
                <Field name={name} >
                {({field:{name,value},form: { setFieldValue}}) =><ImgUploader setFieldValue={setFieldValue}
                                                                              fileTypes={fileTypes}
                                                                              imageCount={imageCount}
                                                                              value={value}
                                                                              name={name}/>}
                </Field>
                :type==='map'?
                <Field name={name} >
              {({field:{name,value},form: { setFieldValue}}) => <MapBlock
                                                                setFieldValue={setFieldValue}
                                                                value={value}
                                                                name={name}/>}
                </Field>
                :
                         <Field name={name} placeholder={placeholder} readOnly={readOnly} />

            }

            <span  className='formErrorMessage'><ErrorMessage name={name}/></span>
        </div>
    )
}

export default FormInput