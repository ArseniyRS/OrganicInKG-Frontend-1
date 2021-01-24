import React, {useEffect, useState} from 'react'
import {Link, withRouter} from "react-router-dom";
import classNames from 'classnames'


const SidebarItem = ({to,name,svg,
                         activeSvg,
                         id,
                         history,
    ...props
})=>{
    const [clicked,setClick] = useState(false)

    const activeRoute =()=>history.location.pathname.indexOf(to) > -1
    useEffect(()=>{
        if(activeRoute()){
           return setClick(true)
        }
        return setClick(false)


    },[history.location.pathname])
    const classes = classNames({
        'sidebar__item' : !clicked,
        'sidebar__item_active' : clicked
    })
    return(
        <li className={classes} onClick={()=>{
            setClick(true)
            history.push(to)
        }}><img src={clicked ? activeSvg : svg} alt=""/><span>{name}</span></li>
    )
}

export default withRouter(SidebarItem)