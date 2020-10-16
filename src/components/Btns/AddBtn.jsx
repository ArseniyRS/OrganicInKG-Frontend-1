import React from 'react'
import './Btns.css'
import {Link} from "react-router-dom";


const AddBtn = ({urlToCreate})=>{
    return(
        <Link to={urlToCreate} className='addBtn'>Добавить</Link>
    )
}
export default AddBtn