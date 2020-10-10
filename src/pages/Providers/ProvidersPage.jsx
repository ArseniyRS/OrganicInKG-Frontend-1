import React, {useEffect} from 'react'
import { Route } from 'react-router-dom'
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import {ProviderColumns} from "../../components/Table/columns";
import SearchPanel from "../../components/Search-panel/SearchPanel";
import AddBtn from "../../components/Btns/AddBtn";
import DeleteBtn from "../../components/Btns/DeleteBtn";


const ProvidersPage = ()=>{
    const data =[{
        id: '1',
        full_name: 'Анисимова Виктория Викторовна',
        phone: '+996 777 77-77-77',
        dir: '123321',
        email: 'fsdfsds',
        status: true
    },
        {
            id: '2',
            full_name: 'Анисимова Виктория Викторовна',
            phone: '+996 777 77-77-77',
            dir: '123321',
            email: 'fsdfsds',
            status: false
        },
        {
            id: '3',
            full_name: 'Анисимова Виктория Викторовна',
            phone: '+996 777 77-77-77',
            dir: '123321',
            email: 'fsdfsds',
            status: false
        }]

    return(
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="page-content">
                    <h2 className='page-content__title'>Поставщики</h2>
                    <div className='page-functional'><SearchPanel /><AddBtn/><DeleteBtn/></div>
                    <Table data={data} columns={ProviderColumns}/>
                </div>
            </div>




        </>
    )
}

export  default  ProvidersPage