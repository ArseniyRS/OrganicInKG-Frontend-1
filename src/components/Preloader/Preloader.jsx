import React from 'react'
import {preloaderSVG} from '../../assets/icons'

const Preloader = ()=>{
    return(
        <div className={'preloader'}><img src={preloaderSVG} alt=""/></div>
    )
}

export default Preloader