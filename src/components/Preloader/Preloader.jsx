import React from 'react'
import './Preloader.css'
const Preloader = (props)=>{
    return(
       <div className={'preloader'}>
                <span className="circle circle-1" style={{width: props.width,height: props.height}}></span>
                <span className="circle circle-2" style={{width: props.width,height: props.height}}></span>
                <span className="circle circle-3" style={{width: props.width,height: props.height}}></span>
        </div>
    )
}

export default Preloader