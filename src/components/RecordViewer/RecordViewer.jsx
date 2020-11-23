import React, {useEffect} from 'react'
import {Link, withRouter} from "react-router-dom";
import './RecordView.css'
import {backSVG} from "../../assets/icons";

const RecordViewer=({titles,values={},urlToUpd,urlToTable,match,editing})=>{
    const valuesToArray = Object.values(values).slice(1,values.length)
    const valsKey = Object.keys(values).slice(1,values.length)

    const elements = ()=>{
        let results=[];
        for(let i=0;i<titles.length;i++){
            for(let j=0;j<valsKey.length;j++){
                if( valsKey[j]===titles[i].dataIndex){
                    const value = ()=> {
                        if (valuesToArray[j] !== null && typeof valuesToArray[j] === 'object') {
                            return valuesToArray[j]?.name ? valuesToArray[j].name :  valuesToArray[j].fullName
                        }
                        return valuesToArray[j]
                    }
                    results.push((
                        <div key={j} className='recordView__item'>
                            <span className='recordView__item-title'>{titles[i].title}</span>
                            <span className='recordView__item-value'>{value()}</span>
                        </div>
                    ))
                    break;
                }

            }
        }
return results
    }
    return(
        <div className='recordView__container'>
            <div className='recordView__container-title'><Link to={urlToTable}><img src={backSVG} alt=""/></Link><h2>{valuesToArray[0]}</h2></div>
            {elements()}
            {editing &&
            <Link to={`${urlToUpd}/${match.params.id}`} className={'recordView__btn'}>Редактировать запись</Link>
            }
        </div>
    )

}

export default withRouter(RecordViewer);