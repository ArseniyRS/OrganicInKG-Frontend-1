import React, {useEffect, useRef, useState} from 'react'
import SelectorList from "./SelectorList";

const Selector = ({handleClick,setVisibleSelector,data})=>{

    const selectorRef = useRef(null)
    const closeSelector = (e)=>{
        if(!selectorRef.current.contains(e.target)){
            setVisibleSelector(false)
        }
    }
    useEffect(()=>{
        document.addEventListener('click',closeSelector,false)
        return ()=>{
            document.removeEventListener('click', closeSelector)
        }
    },[])

    const elements = data.map(item=>{
        return(
            <SelectorList handleClick={handleClick} key={item.id} data={item} />
        )
    })
    return(

        <div className={'selectorInput__selector'} ref={selectorRef}>
            <div className={'selectorInput__selector-container'}>
                {elements}
            </div>
        </div>
    )
}

export default Selector