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
    const tableItemColumn = ()=> {
        let result = []

        const valuesToArray = Object.values(data).slice(1,data.length)
        const valsKey = Object.keys(data).slice(1, data.length)
        for (let i = 0; i < columns.length; i++) {
            for (let j = 0; j < valsKey.length; j++) {
                if (valsKey[j] === columns[i].dataIndex) {
                    const value = () => {
                        if (valuesToArray[j] !== null && typeof valuesToArray[j] === 'object') {
                            return valuesToArray[j]?.name
                        }
                        return valuesToArray[j]
                    }
                    result.push((
                        <div key={"table-item-" + data.id + "-" + i}>
                            <TableItemColumn column={columns[i]} item={{title: columns[i].title, value: value()}}/>
                        </div>
                    ))
                    break;
                }
            }
        }
        return result
    }
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

           {tableItemColumn()}
           
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