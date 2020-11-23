import React, {useEffect, useState} from 'react'
import './Sidebar.css'
import SidebarItem from "./SidebarItem";
import {sideBarConfig} from "./sideBarConfig";

const SidebarList  = ()=>{
    const [activeEl,setActiveEl] = useState([])

    const handleItemClick = (index)=>{
        let buff=[...activeEl]
        for(let i =0;i<sideBarConfig.length;i++){
            if(index===i){
                buff[i]=true

            }else {
                buff[i] = false
            }
        }
        setActiveEl(buff)
    }
    const elements = sideBarConfig.map((item,index)=>{
        return(
            <SidebarItem
                key={index}
                id={index}
                isActive={activeEl[index]}
                to={item.to}
                svg={item.svg}
                name={item.name}
                activeSvg={item.activeSvg}
                handleClick={handleItemClick}
            />
        )
    })
    return(
        <div className='sidebar__container'>
            <ul className='sidebar'>
                {elements}
            </ul>
        </div>
    )
}

export default SidebarList