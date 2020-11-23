import React, {useState} from 'react'
import {openList} from "../../../assets/icons";
import SelectorList from "./SelectorList";
import classNames from 'classnames'



const SelectorItem = ({data,isOpenList,setOpenList,handleClick,thirdStyle=false})=>{
    const [checked, setChecked] = useState(true)
    const styles = classNames({
        'selectorInput__item' : !isOpenList && !thirdStyle,
        "selectorInput__item-2":  isOpenList,
        'selectorInput__item-3' : thirdStyle
    })

    return(
        <>
            <li  className={styles}  onClick={()=> {

                setChecked(!checked)
                data?.children && setOpenList(!isOpenList)
                if(checked) {
                 return handleClick(data.name)
                }else{
                    return handleClick('')
                }
            }}>
              {data.name}
                   {data?.children && <img src={openList} alt=""/>}
            </li>
            {isOpenList && data.children.map(item=><SelectorList thirdStyle={true} data={item} handleClick={handleClick}/>)}

    </>
    )
}


export default SelectorItem