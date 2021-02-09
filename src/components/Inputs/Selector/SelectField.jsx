import React, {useEffect, useRef, useState} from 'react'
import {openList, plusSVG} from "../../../assets/icons";
import SelectBlock from "./SelectBlock";



const SelectField = ({data=[],name,value,setFieldValue,placeholder,})=>{
    const [visibleSelector, setVisibleSelector]  = useState(false);
    const [selectedValue,setSelectedValue] = useState('')
    const selectedItem = (id,text)=>{
        setFieldValue(name,id)
        setSelectedValue(text)
    }
    useEffect(()=>{
        data.map(item=>{
            if(typeof item==='object'){
                if(item.id===value){
                    setSelectedValue(item?.name ? item.name : item.fullName)
                }
            }else{
                if(item===value){
                    setSelectedValue(item)
                }
            }
        })
    },[data])
    //const onChange = (text)=>setFieldValue(name,text)
    return(
        <div className={'selectorInput'} onClick={(event)=>setVisibleSelector(!visibleSelector)}>

            <input type={'text'}
                   readOnly
                   placeholder={placeholder}
                   name={name}
                   value={selectedValue}
            />
            <img className={'selectorInput__visible'} src={plusSVG} alt=""/>
            {(visibleSelector && data.length!==0) && <SelectBlock data={data}  setVisibleSelector={setVisibleSelector} handleClick = {selectedItem}/>}
        </div>
    )
}


export default SelectField


