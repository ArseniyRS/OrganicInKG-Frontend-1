import React, {useEffect, useState} from 'react'
import TableItem from "./Table-item";
import './Table.css'
import withLoader from "../HOC/withLoader";


const Table = ({data=[],columns=[],handlerClick})=>{
    useEffect(()=>{
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
        <div className='table-container'>
            {elements}
        </div>
    )
}

export default Table


