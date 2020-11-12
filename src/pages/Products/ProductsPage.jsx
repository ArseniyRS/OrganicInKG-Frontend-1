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
import ProductCreator from "../../components/Products/ProductCreator";
import ProductUpdater from "../../components/Products/ProductUpdater";
import {deleteProduct, getProducts} from "../../redux/reducers/productReducer";
import RecordViewerContainer from "../../containers/RecordViewerContainer";
import {recordViewProductConfig} from "../../components/Products/recordViewConfig";



const ProductsPage = ({history,products,getProducts,deleteProduct})=>{
    useEffect(()=>{
        getProducts()
    },[])
    const clickOnRecord=(id)=>{
        history.push('/products/view/'+id)
    }
    return(
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="page-content">
                    <Switch>
                    <Route exact path={'/products'}>
                        <h2 className='page-content__title'>Товары</h2>
                        <div className='page-functional'><SearchPanel /><AddBtn urlToCreate={'/products/create-product'}/><DeleteBtn deleteFunc = {deleteProduct}/></div>
                        <Table data={products} columns={ProductColumns} handlerClick={clickOnRecord}/>
                    </Route>
                        <Route exact  path={'/products/create-product'}>
                            <ProductCreator />
                        </Route>

                        <Route exact path={'/products/update-product/:id'}>
                            <ProductUpdater />
                        </Route>
                        <Route  path={'/products/view/:id'}>
                            <RecordViewerContainer
                                titles={recordViewProductConfig}
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
        products: state.product.products
    }
}
export  default  connect(mapStateToProps,{getProducts,deleteProduct})(withRouter(ProductsPage))