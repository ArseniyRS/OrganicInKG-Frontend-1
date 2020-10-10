import React, {useEffect} from 'react'
import {Route, RouteComponentProps, Switch} from 'react-router-dom'
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import SearchPanel from "../../components/Search-panel/SearchPanel";
import AddBtn from "../../components/Btns/AddBtn";
import DeleteBtn from "../../components/Btns/DeleteBtn";
import Table from "../../components/Table/Table";
import {ProductColumns, ProviderColumns} from "../../components/Table/columns";



const ProductsPage = (props)=>{
    const data =[{
        id: '1',
        title: 'Баткенская морковка',
        category: 'Овощи',
        price: '25',
        rate: '5',
    },
        {
            id: '2',
            title: 'Таласский картофель',
            category: 'Овощи',
            price: '30',
            rate: '5',
        },
        {
            id: '3',
            title: 'Иссык-кульские яблоки',
            category: 'Фрукты',
            price: '15',
            rate: '5',
        }]

    return(
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="page-content">
                    <h2 className='page-content__title'>Товары</h2>
                    <div className='page-functional'><SearchPanel /><AddBtn/><DeleteBtn/></div>
                    <Table data={data} columns={ProductColumns}/>
                </div>
            </div>




        </>
    )
}

export  default  ProductsPage