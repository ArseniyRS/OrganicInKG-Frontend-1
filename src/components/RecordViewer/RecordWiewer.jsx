import React, {useEffect} from 'react'
import {withRouter} from "react-router-dom";


const RecordViewer=({titles,values})=>{
    console.log(values)
    const elements = titles.map((title,index)=>{
        return(
            <div key={index}>
                <span>{title}</span>
               <span>{values[index]}</span>
            </div>
        )
    })
    return(
        <div className='recordView-container'>
            {elements}
        </div>
    )

}

export default withRouter(RecordViewer);