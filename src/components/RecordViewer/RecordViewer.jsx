import React, {useEffect} from 'react'
import {Link, withRouter} from "react-router-dom";
import './RecordView.css'
import {backSVG} from "../../assets/icons";

const RecordViewer=({titles,values=[],urlToUpd,urlToTable})=>{
    const vals = Object.values(values).slice(1,values.length);
    const elements = titles.map((title,index)=>{
        return(
            <div key={index} className='recordView__item'>
                <span className='recordView__item-title'>{title}</span>
               <span className='recordView__item-value'>{vals[index]}</span>
            </div>
        )
    })
    return(
        <div className='recordView__container'>
            <div className='recordView__container-title'><Link to={urlToTable}><img src={backSVG} alt=""/></Link><h2>{vals[0]}</h2></div>
            {elements}
            <Link to={urlToUpd} className={'recordView__btn'}>Редактировать запись</Link>
        </div>
    )

}

export default withRouter(RecordViewer);