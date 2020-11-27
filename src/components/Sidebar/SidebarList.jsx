import React, {useEffect, useState} from 'react'
import './Sidebar.css'
import SidebarItem from "./SidebarItem";
import {sideBarConfig} from "./sideBarConfig";
import {withRouter} from "react-router-dom";

const SidebarList  = (props)=>{

    const elements = sideBarConfig.map((item,index)=>{
        return(
            <SidebarItem
                key={index}
                id={index}
                to={item.to}
                svg={item.svg}
                name={item.name}
                activeSvg={item.activeSvg}
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

export default withRouter(SidebarList)