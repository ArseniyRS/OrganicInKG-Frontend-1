import React, {useEffect, useState} from 'react'



const CheckInput = ({name,value,setFieldValue})=>{
    const [checked,setCheck] = useState(value)
    useEffect(()=>{
        setFieldValue(name,checked)
    },[checked])
    return(
        <label className="tableItem-checkbox-label"
               style={{marginTop: '15px'}}
        >
            <input className="tableItem-checkbox__default" name={name}
                   type="checkbox"
                   onChange={()=>setCheck(!checked)}
               defaultChecked={value}
               />
            <span className="tableItem-checkbox__new"></span>
        </label>
    )
}

export default CheckInput