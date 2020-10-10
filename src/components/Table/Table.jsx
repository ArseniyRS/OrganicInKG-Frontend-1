import React, {useEffect, useState} from 'react'
import TableItem from "./Table-item";
import './Table.css'


const Table = ({data=[],columns=[]})=>{


    const elements = data.map(item=>{
        return (
            <div key={item.id}>
            <TableItem columns={columns} data={item}/>
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


