import React, {useState} from 'react'
import {openList} from "../../assets/icons";
import SelectorList from "./SelectorList";




const SelectorItem = ({data,isOpenList,setOpenList,handleClick})=>{
    const [checked, setChecked] = useState(true)
    const styleFunc = ()=>{
        if(data?.parent && !isOpenList)
        {
            return 'selectorInput__item'
        }
        else if(isOpenList)
        {
            return 'selectorInput__item-2'
        }
        else
        {
            return 'selectorInput__item-3'
        }
        }
    return(
        <>
            <li  className={styleFunc()} style={!checked? {color: "#009B00" } : {color: "#8E8E8E" }} onClick={()=> {

                setChecked(!checked)
                data?.parent && setOpenList(!isOpenList)
                if(checked) {
                 return handleClick(data.name)
                }else{
                    return handleClick('')
                }
            }}>
              {data.name}
                   {data?.parent && <img src={openList} alt=""/>}
            </li>
            {isOpenList && data.parent.map(item=><SelectorList data={item} handleClick={handleClick}/>)}

    </>
    )
}


export default SelectorItem