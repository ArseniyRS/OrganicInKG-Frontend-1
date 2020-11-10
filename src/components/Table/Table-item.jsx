import React, {useEffect, useRef, useState} from 'react'
import TableItemColumn from "./TableItemColumn";




const TableItem= ({columns,data,handlerClick})=>{
    const [check,setCheck] = useState(false);
    const tableItemColumn = columns.map(item=>{
        let columnId=0;
        for(let key in data){
            columnId++;
            if( key===item.dataIndex){
                const value = ()=>{
                    if(data[key] !== null && typeof data[key] === 'object') {
                        return data[key].name
                    }
                    return data[key]
                }
                return (
                    <div key={"table-item-"+data.id+"-"+ columnId}>
                        <TableItemColumn column={item} item={{ title:item.title, value:value()}}/>
                    </div>
                )}

        }
    })
    let style={}
    useEffect(()=>{
        if(check){
            style= {
                boxShadow: '0px 1px 8px rgba(0,155,0,.4)'
            }
        }

    },[])
    return(
        <div className={'tableItem-container'}
        >
            <label className="tableItem-checkbox-label">
                <input className="tableItem-checkbox__default" type="checkbox" onClick={()=>setCheck(!check)} />
                    <span className="tableItem-checkbox__new"></span>
            </label>
        <div  className='tableItem' style={style}  onClick={()=>handlerClick(data.id)}>

           {tableItemColumn}
           
        </div>   
        </div>
    )
}

export default TableItem