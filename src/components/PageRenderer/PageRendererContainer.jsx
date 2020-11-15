import React from 'react'
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import {Route, Switch, withRouter} from "react-router-dom";
import SearchPanel from "../Search-panel/SearchPanel";
import AddBtn from "../Btns/AddBtn";
import DeleteBtn from "../Btns/DeleteBtn";
import Table from "../Table/Table";
import CategoryCreator from "../Categories/CategoryCreator";
import CategoryUpdater from "../Categories/RecordUpdater";
import RecordViewerContainer from "../RecordViewer/RecordViewerContainer";
import {categoryInputConfig} from "../Categories/inputFormConfig";
import FormContainer from "../FormGenerator/FormContainer";
import RecordUpdater from "../Categories/RecordUpdater";




const PageRenderer = ({
    history,
    pageUrl,
    pageTitle,

    tableData,
    tableColumnsConfig,

    recordViewTitlesConfig,

    creatorTitle,
    updaterTitle,
    formInputsConfig,
    optionsForSelectorData,
    creatorInitialFormValues,
    updaterInitialFormValues,

    getDataFunc,
    valueById,
    getByIdFunc,
    createFunc,
    updateFunc,
    clearFunc,
    deleteFunc,

                      })=>{
    const clickOnRecord=(id)=>history.push(`/${pageUrl}/view/${id}`)
    return(
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="page-content">
                    <Switch>
                        <Route exact path={`/${pageUrl}`}>
                            <h2 className='page-content__title'>{pageTitle}</h2>
                            <div className='page-functional'>
                                <SearchPanel />
                                <AddBtn
                                    urlToCreate={`/${pageUrl}/${pageUrl}-creator`}
                                />
                                <DeleteBtn
                                    deleteFunc = {deleteFunc}
                                /></div>
                            <Table
                                getDataFunc={getDataFunc}
                                data={tableData}
                                columns={tableColumnsConfig}
                                handlerClick={clickOnRecord} />
                        </Route>
                        <Route exact  path={`/${pageUrl}/${pageUrl}-creator`} >
                            <FormContainer
                                loadSelectorData={getDataFunc}
                                urlToTable={`/${pageUrl}`}
                                createReq = {createFunc}
                                formTitle = {creatorTitle}
                                inputConfig ={formInputsConfig}
                                optionsForSelector = {optionsForSelectorData}
                                initialVals={creatorInitialFormValues}
                            />
                        </Route>
                        <Route exact  path={`/${pageUrl}/${pageUrl}-updater/:id`}>
                            <FormContainer
                                loadSelectorData={getDataFunc}
                                getByIdFunc={getByIdFunc}
                                valueById={valueById}
                                urlToTable={`/${pageUrl}`}
                                initialVals={updaterInitialFormValues}
                                updReq ={updateFunc}
                                formTitle = {updaterTitle}
                                inputConfig ={formInputsConfig}
                                optionsForSelector = {optionsForSelectorData}
                            />
                        </Route>

                        <Route  path={`/${pageUrl}/view/:id`}>
                            <RecordViewerContainer
                                titles={recordViewTitlesConfig}
                                urlToUpd={`/${pageUrl}/${pageUrl}-updater`}
                                urlToTable={`/${pageUrl}`}

                                valueById={valueById}
                                getByIdFunc={getByIdFunc}
                                clearFunc = {clearFunc}
                            />
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    )
}


export default withRouter(PageRenderer)