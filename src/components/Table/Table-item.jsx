import React, {useEffect, useRef, useState} from 'react'
import TableItemColumn from "./TableItemColumn";
import {connect} from "react-redux";
import {writeElementsToDelete} from "../../redux/reducers/tableReducer";




const TableItem= ({columns,data,handlerClick,elementsToDelete,writeElementsToDelete})=>{
    const [check,setCheck] = useState(false);

    useEffect(()=>{
    let buff= [...elementsToDelete]

            if(check){
                buff.push(data.id)
                writeElementsToDelete(buff)
            }else {
                const index = buff.indexOf(data.id)
                if (index > -1) {
                    buff.splice(index, 1);
                    writeElementsToDelete(buff)
                }
            }
        return ()=>{
            writeElementsToDelete([])
        }
    },[check])
    // const checkHandler =  ()=>{
    //     console.log(check)
    //     setCheck(!check)
    //     console.log(check)
    //     let buff= [...elementsToDelete]
    //     if(!check){
    //         buff.push(data.id)
    //     }
    //     const index = buff.indexOf(data.id)
    //     if (index > -1) {
    //         buff.splice(index, 1);
    //
    //     }
    //     console.log(buff)
    //     return writeElementsToDelete(buff)
    // }
    const tableItemColumn = columns.map(item=>{
        let columnId=0;
        for(let key in data){
            columnId++;
            if( key===item.dataIndex){
                const value = ()=>{
                    if(data[key] !== null && typeof data[key] === 'object') {
                        return data[key]?.name
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
const mapStateToProps = state=>{
    return{
        elementsToDelete : state.table.elementsToDelete
    }
}
export default connect(mapStateToProps,{writeElementsToDelete})(TableItem)