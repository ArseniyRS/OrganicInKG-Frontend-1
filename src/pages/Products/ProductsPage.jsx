import React, {useEffect} from 'react'
import {Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom'
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import SearchPanel from "../../components/Search-panel/SearchPanel";
import AddBtn from "../../components/Btns/AddBtn";
import DeleteBtn from "../../components/Btns/DeleteBtn";
import Table from "../../components/Table/Table";
import {ProductColumns, ProviderColumns, UsersColumns} from "../../components/Table/columns";
import {connect} from "react-redux";
import {writeRecordId} from "../../redux/reducers/tableReducer";
import RecordViewer from "../../components/RecordViewer/RecordViewer";
import FormContainer from "../../components/FormGenerator/FormContainer";
import {productInputConfig} from "../../components/Products/inputConfig";



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
                        <Route exact  path={'/products/create-product'}>
                            <FormContainer
                                urlToTable={'/products'}
                                loadData={false}
                                initialVals={{
                                    title: '',
                                    category: '',
                                    image: '',
                                    description: '',
                                    price: '',
                                    rate: '',
                                    sales_amount: '',
                                }}
                                formTitle = {"Создание товара"}
                                inputConfig ={productInputConfig}
                            />
                        </Route>

                        <Route exact path={'/products/update-product/:id'}>
                            <FormContainer
                                urlToTable={'/products'}
                                loadData={true}
                                initialVals={{
                                    title: '',
                                    category: '',
                                    image: '',
                                    description: '',
                                    price: '',
                                    rate: '',
                                    sales_amount: '',
                                }}
                                formTitle = {"Редактирование товара"}
                                inputConfig ={productInputConfig}
                            />
                        </Route>
                        <Route  path={'/products/view/:id'}>
                            <RecordViewer
                                titles={['Название товара',
                                    "Категория",
                                    "Фото товара",
                                    "Описание",
                                    "Цена",
                                    "Рейтинг",
                                    "Количество продаж"
                                ]}
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