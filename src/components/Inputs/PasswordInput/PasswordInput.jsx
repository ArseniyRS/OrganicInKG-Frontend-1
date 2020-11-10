import React, {useState} from 'react'
import {Field, Form} from "formik";
import {checkPasSVG} from "../../../assets/icons";


const PasswordInput = ({name,setFieldValue,placeholder})=>{
    const [visiblePassword, setVisiblePassword]  = useState(false);
    const onChange = (value)=>setFieldValue(name,value)
        return(
            <div className={'passwordInput'}>
                <input type={visiblePassword? 'text' : 'password'}  placeholder={placeholder} name={name} onChange={e=>onChange(e.target.value)}/>
            <img src={checkPasSVG} alt=""
                 onClick={()=>setVisiblePassword(!visiblePassword)}/>
            </div>
    )
}

export default  PasswordInput