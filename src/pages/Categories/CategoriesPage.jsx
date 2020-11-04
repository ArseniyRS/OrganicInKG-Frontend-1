import React, {useEffect} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import SearchPanel from "../../components/Search-panel/SearchPanel";
import AddBtn from "../../components/Btns/AddBtn";
import DeleteBtn from "../../components/Btns/DeleteBtn";
import Table from "../../components/Table/Table";
import {CategoryColumns, UsersColumns} from "../../components/Table/columns";
import CreateOrEditUserContainer from "../../components/Users/CreateOrEditUserContainer";
import RecordViewer from "../../components/RecordViewer/RecordViewer";
import {connect} from "react-redux";
import {writeRecordId} from "../../redux/reducers/tableReducer";
import CreateOrEditCategoryForm from "../../components/Categories/CreateOrEditCategoryForm";
import CreateOrEditCategoryContainer from "../../components/Categories/CreateOrEditCategoryContainer";
import {createCategory, getCategory, updateCategory} from "../../redux/reducers/categoryReducer";
import FormContainer from "../../components/FormGenerator/FormContainer";
import {categoryInputConfig} from "../../components/Categories/inputConfig";




const CategoriesPage = ({history,recordViewId,writeRecordId,getCategory,createCategory,updateCategory})=>{
    useEffect(()=>{
        getCategory()
    },[])
    const data =[{
        id: '1',
        title: 'Овощи',
        parent: '',
        description: 'Лучшие овощи в КР'
    },
        {
            id: '2',
            title: 'Ягоды',
            parent: '',
            description: 'Лучшие Ягоды в КР'
        },
        {
            id: '3',
            title: 'Фрукты',
            parent: '',
            description: 'Лучшие Фрукты в КР'
        }]
    const clickOnRecord=(id)=>{
        writeRecordId(id)
        history.push('/categories/view/'+id)
    }
    const recordViewValue =  data.find(item=>item.id===recordViewId);
    return(
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="page-content">
                <Switch>
                    <Route exact path={'/categories'}>
                        <h2 className='page-content__title'>Категории</h2>
                        <div className='page-functional'><SearchPanel /><AddBtn urlToCreate={'/categories/create-category'}/><DeleteBtn/></div>
                        <Table data={data} columns={CategoryColumns} handlerClick={clickOnRecord} />
                    </Route>
                    <Route exact  path={'/categories/create-category'}>
                        <FormContainer
                            urlToTable={'/categories'}
                            loadData={false}
                            createReq = {createCategory}
                            updReq ={updateCategory}
                            initialVals={{
                                title: '',
                                parent: '',
                                description: '',
                            }}
                            formTitle = {"Создание категории"}
                            inputConfig ={categoryInputConfig}
                        />
                    </Route>
                    <Route exact  path={'/categories/update-category/:id'}>
                        <FormContainer
                            urlToTable={'/categories'}
                            loadData={true}
                            createReq = {createCategory}
                            updReq ={updateCategory}
                            initialVals={{
                                title: '',
                                parent: '',
                                description: '',
                            }}
                            formTitle = {"Редактирование категории"}
                            inputConfig ={categoryInputConfig}
                        />
                    </Route>
                    <Route  path={'/categories/view/:id'}>
                        <RecordViewer
                            titles={['Название',"Вложен в","Описание"]}
                            values={recordViewValue}
                            urlToUpd={'/categories/update-category'}
                            urlToTable={'/categories'}
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

export  default  connect(mapStateToProps,{writeRecordId,getCategory,createCategory,updateCategory})(withRouter(CategoriesPage))
