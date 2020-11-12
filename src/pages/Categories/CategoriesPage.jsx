import React, {useEffect} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import SearchPanel from "../../components/Search-panel/SearchPanel";
import AddBtn from "../../components/Btns/AddBtn";
import DeleteBtn from "../../components/Btns/DeleteBtn";
import Table from "../../components/Table/Table";
import {CategoryColumns} from "../../components/Table/columns";
import {connect} from "react-redux";
import {deleteCategory, getCategory} from "../../redux/reducers/categoryReducer";
import {recordViewCategoryConfig} from "../../components/Categories/recordViewConfig";
import RecordViewerContainer from "../../containers/RecordViewerContainer";
import CategoryCreator from "../../components/Categories/CategoryCreator";
import CategoryUpdater from "../../components/Categories/CategoryUpdater";




const CategoriesPage = ({history,categories,getCategory,deleteCategory})=>{
    useEffect(()=>{
        getCategory()
    },[])
    const clickOnRecord=(id)=>history.push('/categories/view/'+id)
    return(
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="page-content">
                <Switch>
                    <Route exact path={'/categories'}>
                        <h2 className='page-content__title'>Категории</h2>
                        <div className='page-functional'><SearchPanel />
                        <AddBtn
                            urlToCreate={'/categories/create-category'}/>
                            <DeleteBtn deleteFunc = {deleteCategory}/></div>
                        <Table
                            data={categories}
                            columns={CategoryColumns}
                            handlerClick={clickOnRecord} />

                    </Route>
                    <Route exact  path={'/categories/create-category'} >
                        <CategoryCreator />
                    </Route>
                    <Route exact  path={'/categories/update-category/:id'}>
                        <CategoryUpdater />
                     </Route>

                    <Route  path={'/categories/view/:id'}>
                        <RecordViewerContainer
                            titles={recordViewCategoryConfig}
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
        categories: state.category.categories
    }
}

export  default  connect(mapStateToProps,{getCategory,deleteCategory})(withRouter(CategoriesPage))
