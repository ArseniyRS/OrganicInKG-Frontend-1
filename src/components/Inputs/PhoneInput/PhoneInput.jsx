import React from 'react'
import InputMask from 'react-input-mask';



const PhoneInput = ({name,setFieldValue,placeholder,value})=>{
    const onChange = (value)=>setFieldValue(name,value.replace(/[\ \(\)\-]/g, ""))
    return(
        <InputMask
            mask="\+\9\9\6\ (999) 99-99-99"
            placeholder={'+996 (___) __-__-__'}
            name={name}
            onChange={e=>onChange(e.target.value)}
        />
    )
}

export default  PhoneInput