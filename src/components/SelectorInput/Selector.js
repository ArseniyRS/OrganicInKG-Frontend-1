import React, {useEffect, useRef, useState} from 'react'
import SelectorList from "./SelectorList";

const Selector = ({handleClick,setVisibleSelector})=>{
    const items =  [{
            id: 1,
            name: 'Чуй',
            parent: [{
                id: 11,
                name: 'Bishkek',
                parent: [{
                    id: 111,
                    name: 'lebedinovka'
                },{
                    id: 112,
                    name:'pokrovka'
                }]
            },
                {
                    id: 12,
                    name: 'Kant',
                    parent: [{
                        id: 111,
                        name: 'lebedinovka'
                    },{
                        id: 112,
                        name:'pokrovka'
                    }]
                },]
        },
            {
                id: 2,
                name: 'Таласская',
                parent: [{
                    id: 21,
                    name: 'Талас',
                    parent: [{
                        id: 211,
                       name: 'lebedinovka'
                    },{
                        id: 211,
                        name:'pokrovka'
                    }]
                }]
            },
            {
                id: 3,
                name: 'Нарынская',
                parent: [{
                    id: 31,
                    name: 'Нарын',
                    parent: [{
                        id: 311,
                        name: 'lebedinovka'
                    },{
                        id: 312,
                        name:'pokrovka'
                    }]
                }]
            },
        ]
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

    const elements = items.map(item=>{
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