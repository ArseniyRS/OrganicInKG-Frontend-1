import React, {useEffect, useRef, useState} from 'react'
import {Field, Form} from "formik";
import {checkPasSVG, plusSVG} from "../../../assets/icons";
import Selector from "./Selector";
import {toUglyfyFieldsValue} from "../../../utils/toUglyfyFieldsValue";


const SelectorInput = ({name,value,setFieldValue,placeholder,data})=>{
    const [visibleSelector, setVisibleSelector]  = useState(false);
    const [selected, setSelected] = useState('')
    const [inputText,setInputText] = useState(value);
    const onChange = (value)=>{
        setInputText(value)
    }
    useEffect(()=>{
        setFieldValue(name,inputText)
    },[inputText])


    useEffect(()=>{
  setInputText(inputText + ` ${toUglyfyFieldsValue(selected)} `)


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
            {visibleSelector && <Selector data={data} setVisibleSelector={setVisibleSelector} handleClick = {setSelected}/>}
        </div>


    )
}

export default  SelectorInput


