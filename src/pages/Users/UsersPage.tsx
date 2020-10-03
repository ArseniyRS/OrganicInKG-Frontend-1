import React, {useEffect} from 'react'
import { Route } from 'react-router-dom'
import Sidebar from "../../components/Sidebar/Sidebar";

const UsersPage = ()=>{


    return(
        <>
            <Sidebar />
            <div className="container">
                <div className='tableSection'>

                        {/*<Route path={props.match.path} exact*/}
                        {/*       render={()=>*/}
                        {/*           <CRMTable*/}
                        {/*               title={'Поставщики'}*/}
                        {/*               linkForCreate={`${props.match.path}/create-providers`}*/}
                        {/*               columns={VendorColumns}*/}
                        {/*               data={data}*/}
                        {/*               favRows={favoriteRows}*/}
                        {/*           />}*/}
                        {/*/>*/}
                        {/*<Route path={`${props.match.path}/create-providers`} exact   render={()=><CreateOrEditProviderContainer*/}
                        {/*    title={'Создание поставщика'}*/}
                        {/*    loadData={0} />} />*/}

                        {/*<Route path={`${props.match.path}/edit-providers/:provider_id`}  exact   render={()=><CreateOrEditProviderContainer*/}
                        {/*    title={'Редактирование поставщика'} p*/}
                        {/*    providers={props.providers}*/}
                        {/*    loadData={1} />} />*/}

                </div>
            </div>
        </>
    )
}

export  default  UsersPage