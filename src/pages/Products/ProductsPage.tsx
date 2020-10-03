import React, {useEffect} from 'react'
import {Route, Switch} from 'react-router-dom'
import Sidebar from "../../components/Sidebar/Sidebar";
import CRMTable from "../../components/Table/CRMTable";

interface ProductsPageProps  {
    title: string,
    match: {
        path: string
    }
}
const ProductsPage:React.FC = (props)=>{
    console.log(props)

    return(
        <>
            <Sidebar />
            <div className="container">
                <div className='tableSection'>
                    <div className="container">
                        <div className='tableSection'>
                            <Switch>
                                <Route path={'/providers'} exact
                                       render={()=>
                                           <CRMTable
                                               //title={'Поставщики'}
                                              // linkForCreate={`${props.match.path}/create-providers`}
                                               //columns={VendorColumns}
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
}

export  default  ProductsPage