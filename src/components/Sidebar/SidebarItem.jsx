import React, {useState} from 'react'
import {providerSVG} from "../../assets/icons";
import {Link} from "react-router-dom";
import classNames from 'classnames'


const SidebarItem = ({to,name,svg,
                         activeSvg,
                        handleClick,
                         id,
                         isActive=false
})=>{
    const classes = classNames({
        'sidebar__item' : !isActive,
        'sidebar__item_active' : isActive
    })
    return(
        <li className={classes} ><img src={isActive ? activeSvg : svg} alt=""/><Link onClick={()=>handleClick(id)} to={to} >{name}</Link></li>
    )
}

export default SidebarItem