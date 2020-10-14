import React, {useEffect} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import SearchPanel from "../../components/Search-panel/SearchPanel";
import AddBtn from "../../components/Btns/AddBtn";
import DeleteBtn from "../../components/Btns/DeleteBtn";
import Table from "../../components/Table/Table";
import {ProductColumns, ProviderColumns, UsersColumns} from "../../components/Table/columns";
import CreateOrEditUserContainer from "../../components/Users/CreateOrEditUserContainer";
import CreateOrEditProductContainer from "../../components/Products/CreateOrEditProductContainer";
import RecordViewer from "../../components/RecordViewer/RecordWiewer";


const UsersPage = ({history})=>{


    const data =[{
        id: '1',
        first_name: 'Виктория',
        last_name: 'Анисимова ',
        middle_name: 'Викторовна',
        email: 'fsdfsds',
    },
        {
            id: '2',
            first_name: 'Виктория',
            last_name: 'Анисимова ',
            middle_name: 'Викторовна',
            email: 'fsdfsds',
        },
        {
            id: '3',
            first_name: 'Виктория',
            last_name: 'Анисимова ',
            middle_name: 'Викторовна',
            email: 'fsdfsds',
        }]
    const clickOnRecord=(id)=>{
        console.log(id)
        history.push('/users/view/'+id);
    }
    return(
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="page-content">
                    <Switch>
                        <Route exact path={'/users'}>
                            <h2 className='page-content__title'>Пользователи</h2>
                            <div className='page-functional'><SearchPanel /><AddBtn/><DeleteBtn/></div>
                            <Table data={data} columns={UsersColumns} handlerClick={clickOnRecord}/>
                        </Route>
                        <Route exact  path={'/users/create-user'}>
                            <CreateOrEditUserContainer loadData={false}/>
                        </Route>
                        <Route exact path={'/users/update-user'}>
                            <CreateOrEditUserContainer loadData={true}/>
                        </Route>
                        <Route  path={'/users/view/:id'}>
                            <RecordViewer
                            titles={['Имя',"Фамилия","Отчество","E-mail"]}
                            values={[...data]}
                            />
                        </Route>
                    </Switch>
                </div>
            </div>




        </>
    )
}

export  default  withRouter(UsersPage)