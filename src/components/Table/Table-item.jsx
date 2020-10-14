import React, {useRef, useState} from 'react'
import TableItemColumn from "./TableItemColumn";




const TableItem= ({columns,data,handlerClick})=>{
    const [check,setCheck] = useState(false);
    const tableItemColumn = columns.map(item=>{
        for(let key in data){
            if(key===item.dataIndex){
                return (
                    <div key={data.id+'TableItemColumn'}>
                        <TableItemColumn column={item} item={{ title:item.title, value:data[key],}} />
                    </div>

                )

        }}
    })
    let style={}
    if(check){
        style= {
            boxShadow: '0px 1px 8px rgba(0,155,0,.4)'
        }
    }
    console.log(tableItemColumn)
    console.log(data)
    return(
        <div className={'tableItem-container'} onClick={()=>handlerClick(data.id)}>
            <label className="tableItem-checkbox-label">
                <input className="tableItem-checkbox__default" type="checkbox" onClick={()=>setCheck(!check)} />
                    <span className="tableItem-checkbox__new"></span>
            </label>
        <div  className='tableItem' style={style} >

           {tableItemColumn}
           
        </div>   
        </div>
    )
}

export default TableItem