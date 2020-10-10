import React, {useEffect} from 'react'
import { Route, Switch } from 'react-router-dom'
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import SearchPanel from "../../components/Search-panel/SearchPanel";
import AddBtn from "../../components/Btns/AddBtn";
import DeleteBtn from "../../components/Btns/DeleteBtn";
import Table from "../../components/Table/Table";
import {CategoryColumns} from "../../components/Table/columns";




const CategoriesPage = (props)=>{

    const data =[{
        id: '1',
        title: 'Овощи',
        parent: '',
        description: 'Лучшие овощи в КР'
    },
        {
            id: '2',
            title: 'Ягоды',
            parent: '',
            description: 'Лучшие Ягоды в КР'
        },
        {
            id: '3',
            title: 'Фрукты',
            parent: '',
            description: 'Лучшие Фрукты в КР'
        }]

    return(
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="page-content">
                    <h2 className='page-content__title'>Категории</h2>
                    <div className='page-functional'><SearchPanel /><AddBtn/><DeleteBtn/></div>
                    <Table data={data} columns={CategoryColumns}/>
                </div>
            </div>




        </>
    )
}

export  default  CategoriesPage