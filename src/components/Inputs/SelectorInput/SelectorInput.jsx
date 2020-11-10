import React, {useEffect, useRef, useState} from 'react'
import {Field, Form} from "formik";
import {checkPasSVG, plusSVG} from "../../../assets/icons";
import Selector from "./Selector";


const SelectorInput = ({name,value,setFieldValue,placeholder})=>{
    const [visibleSelector, setVisibleSelector]  = useState(false);
    const [selected, setSelected] = useState('')
    const [inputText,setInputText] = useState('');
    const onChange = (value)=>{
        setInputText(value)
        setFieldValue(name,inputText)
    }

    useEffect(()=>{
        if(selected !== ''){
            setInputText(inputText+` ${selected} `)
        }
    },[selected])
    return(

        <div className={'selectorInput'}>

            <input type={'text'}
                   placeholder={placeholder}
                   name={name}
                   onChange={e=>onChange(e.target.value)}
                   value={inputText}
                   />
            <img className={'selectorInput__visible'} src={plusSVG} alt=""
                 onClick={(event)=>setVisibleSelector(!visibleSelector)}/>
            {visibleSelector && <Selector setVisibleSelector={setVisibleSelector} handleClick = {setSelected}/>}
        </div>


    )
}

export default  SelectorInput