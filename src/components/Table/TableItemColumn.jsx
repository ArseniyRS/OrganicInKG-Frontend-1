import React, {useEffect} from 'react'



const TableItemColumn = ({item,column})=>{

    return(
        <div className='tableItemColumn'>
            <span className='tableItemColumn__title'>
                {item.title}
            </span>
            <span className='tableItemColumn__value'>
                {column?.render ? column.render(item.value): item.value}
            </span>
        </div>
    )
}

export default TableItemColumn