import React, {useEffect} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
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
import {connect} from "react-redux";
import {writeRecordId} from "../../redux/reducers/tableReducer";
import RecordViewer from "../../components/RecordViewer/RecordViewer";
import Modal from "../../components/Modals/Modal";

const OrdersPage = ({history,recordViewId,writeRecordId})=>{


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
    const clickOnRecord=(id)=>{
        writeRecordId(id)
        history.push('/orders/view/'+id)
    }
    const recordViewValue =  data.find(item=>item.id===recordViewId);
    return(
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="page-content">
                    <Switch>
                        <Route exact path={'/orders'}>
                            <h2 className='page-content__title'>Заказы</h2>
                            <div className='page-functional'><SearchPanel /><AddBtn urlToCreate={'/orders/create-order'}/><DeleteBtn/></div>
                            <Table data={data} columns={OrdersColumns} handlerClick={clickOnRecord}/>
                        </Route>
                        <Route exact  path={'/orders/create-order'}>
                            <CreateOrEditOrdersContainer urlToTable={'/orders'} loadData={false}/>
                        </Route>
                        <Route exact path={'/orders/update-order'}>
                            <CreateOrEditOrdersContainer urlToTable={'/orders'} loadData={true}/>
                        </Route>
                        <Route  path={'/orders/view/:id'}>
                            <RecordViewer
                                titles={['Товары',"Количество","Цена","Адрес"]}
                                values={recordViewValue}
                                urlToUpd={'/orders/update-order'}
                                urlToTable={'/orders'}
                            />
                        </Route>
                    </Switch>
                </div>
            </div>



        </>
    )
}

const mapStateToProps = state=>{
    return{
        recordViewId: state.table.recordViewId,
    }
}
export  default  connect(mapStateToProps,{writeRecordId})(withRouter(OrdersPage))