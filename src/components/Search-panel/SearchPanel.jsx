import React from 'react'
import {searchSVG } from '../../assets/icons'
import './Search-panel.css'

const SearchPanel = ()=>{
    return(
        <div className='searchPanel'>
            <span><img src={searchSVG} alt=""/><input type="text" placeholder={'Поиск'}/></span>
        </div>
    )
}

export default SearchPanel