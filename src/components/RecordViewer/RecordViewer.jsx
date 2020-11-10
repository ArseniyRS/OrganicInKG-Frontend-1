import React, {useEffect} from 'react'
import {Link, withRouter} from "react-router-dom";
import './RecordView.css'
import {backSVG} from "../../assets/icons";

const RecordViewer=({titles,values={},urlToUpd,urlToTable,match})=>{
    const valuesToArray = Object.values(values).slice(1,values.length)
    const valsKey = Object.keys(values).slice(1,values.length)

    const elements = titles.map((item,index)=>{
        if( valsKey[index]===item.dataIndex){
            const value = ()=> {
                if (valuesToArray[index] !== null && typeof valuesToArray[index] === 'object') {
                    return valuesToArray[index].name
                }
                return valuesToArray[index]
            }
            return(
                <div key={index} className='recordView__item'>
                    <span className='recordView__item-title'>{item.title}</span>
                    <span className='recordView__item-value'>{value()}</span>
                </div>
            )
        }
    })
    return(
        <div className='recordView__container'>
            <div className='recordView__container-title'><Link to={urlToTable}><img src={backSVG} alt=""/></Link><h2>{valuesToArray[0]}</h2></div>
            {elements}
            <Link to={`${urlToUpd}/${match.params.id}`} className={'recordView__btn'}>Редактировать запись</Link>
        </div>
    )

}

export default withRouter(RecordViewer);