import React from 'react'
import {searchSVG } from '../../assets/icons'
import './Search-panel.css'

const SearchPanel = (props)=>{
    return(
        <div className='searchPanel'>
            <span><img src={searchSVG} alt=""/><input type="text" placeholder={'Поиск'} onChange={(event) => props.handleSearchText(event.target.value)}/></span>
        </div>
    )
}

export default SearchPanel