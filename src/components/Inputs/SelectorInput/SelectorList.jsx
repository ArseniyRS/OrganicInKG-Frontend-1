import React, {useState} from 'react'
import SelectorItem from "./SelectorItem";




const SelectorList = ({data,handleClick})=>{
    const [isOpenList,setOpenList] = useState(false);
    return(
        <>
            {data?.parent ?
                <ul key={data.id} className={isOpenList ? 'selectorInput__list-clicked' :'selectorInput__list'}>
                <SelectorItem
                    isOpenList={isOpenList}
                    setOpenList={setOpenList}
                    handleClick={handleClick}
                    data={data} />


            </ul>
            :
                <SelectorItem
                    data={data}
                    handleClick={handleClick}
                />
            }

    </>
    )
}


export default SelectorList