import React from 'react'
import {toBeautifyFieldsValue} from "../../../utils/toBeatifyFiledsValue";




const SelectItem = props=>{
    if( typeof props.data === 'object'){
        console.log('obj')
    }
    return (
        typeof props.data === 'object' ?
        <li  className={'selectorInput__item'}  onClick={()=> {
                props.handleClick(props.data.id,props.data.name ?
                                                props.data.name :
                                                props.data.fullName)
        }}>
            {toBeautifyFieldsValue(props.data.name ? props.data.name : props.data.fullName ) }
        </li>
            :
            <li  className={'selectorInput__item'}  onClick={()=> {
                props.handleClick(props.data,props.data)
            }}>
                {toBeautifyFieldsValue(props.data)}
            </li>

    )
}
export default SelectItem