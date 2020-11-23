import React, {useState} from 'react'
import SelectorItem from "./SelectorItem";




const SelectorList = ({data,handleClick,thirdStyle})=>{
    const [isOpenList,setOpenList] = useState(false);
    return(
        <>
            {data?.children ?
                <ul key={data.id} className={isOpenList ? 'selectorInput__list-clicked' :'selectorInput__list'}>
                <SelectorItem
                    isOpenList={isOpenList}
                    setOpenList={setOpenList}
                    handleClick={handleClick}
                    data={data}
                    thirdStyle={thirdStyle}
                />


            </ul>
            :
                <SelectorItem
                    data={data}
                    handleClick={handleClick}
                    thirdStyle={thirdStyle}
                />
            }

    </>
    )
}


export default SelectorList