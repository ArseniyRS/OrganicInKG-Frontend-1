import React, {useEffect, useState} from 'react'
import TableItem from "./Table-item";
import './Table.css'
import withLoader from "../HOC/withLoader";
import Preloader from "../Preloader/Preloader";


const Table = ({getDataFunc,data=[],columns=[],handlerClick})=>{
    useEffect(()=>{
        getDataFunc()
        return ()=>{
            data=[]
            columns=[]
        }
    })

    const elements = data.map(item=>{
        return (
            <div key={item.id}>
            <TableItem columns={columns} data={item} handlerClick = {handlerClick}/>
            </div>
        )
    })
    return(
        data.length!==0 ?
        <div className='table-container'>
            {elements}
        </div> : <Preloader />
    )
}

export default Table


