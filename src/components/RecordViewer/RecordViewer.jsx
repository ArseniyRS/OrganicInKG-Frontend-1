import React, {useEffect} from 'react'
import {Link, withRouter} from "react-router-dom";
import './RecordView.css'
import {backSVG} from "../../assets/icons";
import {toBeautifyFieldsValue} from "../../utils/toBeatifyFiledsValue";

const RecordViewer=({titles,values={},urlToUpd,urlToTable,match,editing,recordViewValuesConfig})=>{
    const valuesToArray = recordViewValuesConfig ? Object.values(recordViewValuesConfig) :Object.values(values).slice(1,values.length)
    const valsKey =recordViewValuesConfig ? Object.keys(recordViewValuesConfig) : Object.keys(values).slice(1,values.length)
    const elements = ()=>{
        let results=[];
        for(let i=0;i<titles.length;i++){
            for(let j=0;j<valsKey.length;j++){
                if( valsKey[j]===titles[i].dataIndex){
                    results.push((
                        <div key={j} className='recordView__item'>
                            <span className='recordView__item-title'>{titles[i].title}</span>

                            {titles[i]?.type==='image' ?
                                <div className={'recordView__item-imgWrapper'}>


                                    { ////////////////////////////////////////////////////////////////////
                                        Array.isArray(valueChooser(titles[i], valuesToArray[j])) ?      // проверка на массив картинок
                                        valueChooser(titles[i], valuesToArray[j]).map(item => {
                                            return (
                                                <div key={item.id} className={'recordView__item-imgContainer'}><img
                                                    src={item.imageUrl} alt=""/></div>
                                            )
                                        })                                                              // вывод только одной картинки
                                        :  <div className={'recordView__item-imgContainer'}>
                                            <img src={ valuesToArray[j]} alt=""/></div>
                                        //////////////////////////////////////////////////////////////////
                                    }
                                    </div>
                           : <span className='recordView__item-value'> {toBeautifyFieldsValue(valueChooser(titles[i],valuesToArray[j]))}</span>}
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

const valueChooser = (title,value)=> {
    if(title?.object){
        return value?.[`${title.object}`]
    }else if(title?.array){
        if(title.array){
            return fieldSearcherInObj(value,title.array)
        }
    }
    return value
}

function fieldSearcherInObj(obj,searchedField) {
    const result = [];
    for (let prop in obj) {
        const value = obj[prop];
        if(searchedField === prop){
            return value
        }
        if (typeof value === 'object') {
            result.push(fieldSearcherInObj(value,searchedField));
        }
    }
    return result;
}