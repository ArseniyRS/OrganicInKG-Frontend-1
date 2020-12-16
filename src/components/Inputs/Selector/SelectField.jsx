import React, {useEffect, useRef, useState} from 'react'
import {openList, plusSVG} from "../../../assets/icons";
import SelectBlock from "./SelectBlock";



const SelectField = ({data,name,value,setFieldValue,placeholder,})=>{
    const [visibleSelector, setVisibleSelector]  = useState(false);
    const [selectedValue,setSelectedValue] = useState('')
    const selectedItem = (id,text)=>{
        setFieldValue(name,id)
        setSelectedValue(text)
    }
    const onChange = (text)=>setFieldValue(text)
    return(
        <div className={'selectorInput'}>

            <input type={'text'}
                   placeholder={placeholder}
                   name={name}
                   onChange={e=>onChange(e.target.value)}
                   value={selectedValue}
            />
            <img className={'selectorInput__visible'} src={plusSVG} alt=""
                 onClick={(event)=>setVisibleSelector(!visibleSelector)}/>
            {(visibleSelector && data.length!==0) && <SelectBlock data={data} setVisibleSelector={setVisibleSelector} handleClick = {selectedItem}/>}
        </div>
    )
}


export default SelectField


