import React from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import {Route, Switch} from "react-router-dom";
import CRMTable from "../../components/Table/Table";
import { UsersColumns} from "../../components/Table/columns";


const UsersPage = ()=>{
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
                                    <Route path={'/users'} exact
                                           render={()=>

                                               <CRMTable
                                                   title={'Пользователи'}
                                                   //linkForCreate={`${props.match.path}/create-providers`}
                                                   columns={UsersColumns}
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

export default UsersPage