import React, {useEffect} from 'react'
import {Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom'
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import SearchPanel from "../../components/Search-panel/SearchPanel";
import AddBtn from "../../components/Btns/AddBtn";
import DeleteBtn from "../../components/Btns/DeleteBtn";
import Table from "../../components/Table/Table";
import {ProductColumns, ProviderColumns, UsersColumns} from "../../components/Table/columns";
import CreateOrEditUsersContainer from "../../components/Users/CreateOrEditUserContainer";
import CreateOrEditProductContainer from "../../components/Products/CreateOrEditProductContainer";
import {connect} from "react-redux";
import {writeRecordId} from "../../redux/reducers/tableReducer";
import RecordViewer from "../../components/RecordViewer/RecordViewer";



const ProductsPage = ({history,recordViewId,writeRecordId})=>{
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
    const clickOnRecord=(id)=>{
        writeRecordId(id)
        history.push('/products/view/'+id)
    }
    const recordViewValue =  data.find(item=>item.id===recordViewId);
    return(
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="page-content">
                    <Switch>
                    <Route exact path={'/products'}>
                        <h2 className='page-content__title'>Товары</h2>
                        <div className='page-functional'><SearchPanel /><AddBtn urlToCreate={'/products/create-product'}/><DeleteBtn/></div>
                        <Table data={data} columns={ProductColumns} handlerClick={clickOnRecord}/>
                    </Route>
                    <Route exact path={'/products/create-product'}>
                        <CreateOrEditProductContainer urlToTable={'/products'} loadData={false}/>
                    </Route>
                    <Route exact path={'/products/update-product'}>
                        <CreateOrEditProductContainer urlToTable={'/products'} loadData={true}/>
                    </Route>
                        <Route  path={'/products/view/:id'}>
                            <RecordViewer
                                titles={['Название',"Категория","Цена","Рейтинг"]}
                                values={recordViewValue}
                                urlToUpd={'/products/update-product'}
                                urlToTable={'/products'}
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
        recordViewId: state.table.recordViewId
    }
}
export  default  connect(mapStateToProps,{writeRecordId})(withRouter(ProductsPage))