import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CRMTable from "../../components/Table/Table";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ProductColumns} from "../../components/Table/columns";


const ProductsContainer = ()=>{
    return(
        <>
            return(
            <>
                <Sidebar />
                <div className="container page">
                    <div className='tableSection'>
                        <div className="container">
                            <div className='tableSection'>
                                <Switch>
                                    <Route path={'/products'} exact
                                           render={()=>

                                               <CRMTable
                                                   title={'Категории'}
                                                   //linkForCreate={`${props.match.path}/create-providers`}
                                                   columns={ProductColumns}
                                                   //  data={data}

                                               />}
                                    />
                                    {/*<Route path={`${props.match.path}/create-providers`} exact   render={()=><CreateOrEditProviderContainer*/}
                                    {/*    title={'Создание поставщика'}*/}
                                    {/*    loadData={0} />} />*/}

                                    {/*<Route path={`${props.match.path}/edit-providers/:provider_id`}  exact   render={()=><CreateOrEditProviderContainer*/}
                                    {/*    title={'Редактирование поставщика'} p*/}
                                    {/*    providers={props.providers}*/}
                                    {/*    loadData={1} />} />*/}
                                </Switch>
                            </div>
                        </div>

                    </div>
                </div>
            </>

            )
        </>
    )
}

export default  ProductsContainer