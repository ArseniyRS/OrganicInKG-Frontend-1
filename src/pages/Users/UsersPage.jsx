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
import RecordViewer from "../../components/RecordViewer/RecordViewer";
import {connect} from "react-redux";
import {writeRecordId} from "../../redux/reducers/tableReducer";
import FormContainer from "../../components/FormGenerator/FormContainer";
import {providerInputConfig} from "../../components/Providers/inputConfig";
import {userInputConfig} from "../../components/Users/inputConfig";


const UsersPage = ({history,recordViewId,writeRecordId})=>{


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
        writeRecordId(id)
        history.push('/users/view/'+id)
    }
    const recordViewValue =  data.find(item=>item.id===recordViewId);
    return(
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="page-content">
                    <Switch>
                        <Route exact path={'/users'}>
                            <h2 className='page-content__title'>Пользователи</h2>
                            <div className='page-functional'><SearchPanel /><AddBtn urlToCreate={'/users/create-user'}/><DeleteBtn/></div>
                            <Table data={data} columns={UsersColumns} handlerClick={clickOnRecord} />
                        </Route>
                        <Route exact  path={'/users/create-user'}>
                            <FormContainer
                                urlToTable={'/users'}
                                loadData={false}
                                initialVals={{
                                    first_name: '',
                                    last_name: '',
                                    middle_name: '',
                                    email: '',
                                }}
                                formTitle = {"Создание пользователя"}
                                inputConfig ={userInputConfig}
                            />
                        </Route>

                        <Route exact path={'/users/update-user/:id'}>
                            <FormContainer
                                urlToTable={'/users'}
                                loadData={true}
                                initialVals={{
                                    first_name: '',
                                    last_name: '',
                                    middle_name: '',
                                    email: '',
                                }}
                                formTitle = {"Редактирование пользователя"}
                                inputConfig ={userInputConfig}
                            />
                        </Route>
                        <Route  path={'/users/view/:id'}>
                            <RecordViewer
                            titles={['Имя',"Фамилия","Отчество","E-mail"]}
                            values={recordViewValue}
                            urlToUpd={'/users/update-user'}
                            urlToTable={'/users'}
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
export  default  connect(mapStateToProps,{writeRecordId})(withRouter(UsersPage))