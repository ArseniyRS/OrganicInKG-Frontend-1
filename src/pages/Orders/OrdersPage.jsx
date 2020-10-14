import React, {useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import SearchPanel from "../../components/Search-panel/SearchPanel";
import AddBtn from "../../components/Btns/AddBtn";
import DeleteBtn from "../../components/Btns/DeleteBtn";
import Table from "../../components/Table/Table";
import {OrdersColumns, ProductColumns, ProviderColumns, UsersColumns} from "../../components/Table/columns";
import CreateOrEditProductContainer from "../../components/Products/CreateOrEditProductContainer";
import CreateOrEditOrdersContainer from "../../components/Orders/CreateOrEditOrdersContainer";
import CreateOrEditUserContainer from "../../components/Users/CreateOrEditUserContainer";

const OrdersPage = ()=>{


    const data =[{
        order_id: '1',
        product: 'Таласский картофель',
        amount: '40кг',
        total: 1400,
        delivery_address: '123321',
    },
        {
            order_id: '2',
            product: 'Таласский картофель',
            amount: '20кг',
            total:700,
            delivery_address: '123321',
        },
        {
            order_id: '3',
            product: 'Таласский картофель',
            amount: '100кг',
            total: 3500,
            delivery_address: '123321',
        },]

    return(
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="page-content">
                    <Switch>
                        <Route exact path={'/orders'}>
                            <h2 className='page-content__title'>Заказы</h2>
                            <div className='page-functional'><SearchPanel /><AddBtn/><DeleteBtn/></div>
                            <Table data={data} columns={OrdersColumns}/>
                        </Route>
                        <Route exact  path={'/orders/create-order'}>
                            <CreateOrEditOrdersContainer loadData={false}/>
                        </Route>
                        <Route exact path={'/orders/update-order'}>
                            <CreateOrEditOrdersContainer loadData={true}/>
                        </Route>
                    </Switch>
                </div>
            </div>




        </>
    )
}

export  default  OrdersPage