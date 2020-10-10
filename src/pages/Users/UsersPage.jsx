import React, {useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import SearchPanel from "../../components/Search-panel/SearchPanel";
import AddBtn from "../../components/Btns/AddBtn";
import DeleteBtn from "../../components/Btns/DeleteBtn";
import Table from "../../components/Table/Table";
import {ProviderColumns, UsersColumns} from "../../components/Table/columns";


const UsersPage = ()=>{


    const data =[{
        user_id: '1',
        first_name: 'Виктория',
        last_name: 'Анисимова ',
        middle_name: 'Викторовна',
        email: 'fsdfsds',
    },
        {
            user_id: '2',
            first_name: 'Виктория',
            last_name: 'Анисимова ',
            middle_name: 'Викторовна',
            email: 'fsdfsds',
        },
        {
            user_id: '3',
            first_name: 'Виктория',
            last_name: 'Анисимова ',
            middle_name: 'Викторовна',
            email: 'fsdfsds',
        }]

    return(
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="page-content">
                    <h2 className='page-content__title'>Пользователи</h2>
                    <div className='page-functional'><SearchPanel /><AddBtn/><DeleteBtn/></div>
                    <Table data={data} columns={UsersColumns}/>
                </div>
            </div>




        </>
    )
}

export  default  UsersPage