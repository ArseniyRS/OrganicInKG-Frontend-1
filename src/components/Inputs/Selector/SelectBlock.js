import React, {useEffect, useRef} from 'react'
import SelectItem from "./SelectItem";

const SelectBlock = ({handleClick, setVisibleSelector, data})=> {

    const selectorRef = useRef(null)
    const closeSelector = (e) => {
        if (!selectorRef.current.contains(e.target)) {
            setVisibleSelector(false)
        }
    }
    useEffect(() => {
        document.addEventListener('click', closeSelector, false)
        return () => {
            document.removeEventListener('click', closeSelector)
        }
    }, [])

    const elements = data.map((item,index) => <SelectItem key={index} data={item} handleClick={handleClick} />)
    return (

        <div className={'selectorInput__selector'} ref={selectorRef}>
            <div className={'selectorInput__selector-container'}>
                <ul>
                    {elements}
                </ul>

            </div>
        </div>
    )
}

export default SelectBlock