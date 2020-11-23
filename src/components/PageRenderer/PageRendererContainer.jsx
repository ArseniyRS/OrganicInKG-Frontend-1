import React, {useEffect, useRef, useState} from 'react'
import Header from "../Header/Header";
import SidebarList from "../Sidebar/SidebarList";
import {Route, Switch, withRouter} from "react-router-dom";
import SearchPanel from "../Search-panel/SearchPanel";
import AddBtn from "../Btns/AddBtn";
import DeleteBtn from "../Btns/DeleteBtn";
import Table from "../Table/Table";
import RecordViewerContainer from "../RecordViewer/RecordViewerContainer";
import FormContainer from "../FormGenerator/FormContainer";
import {connect} from "react-redux";




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
    loadSelectorData,
    optionsForSelectorData,
    creatorInitialFormValues,
    updaterInitialFormValues,
    fileUploadKeys,

    getDataFunc,
    valueById,
    getByIdFunc,
    createFunc,
    updateFunc,
    clearFunc,
    deleteFunc,

    isLoading,


    adding=true,
    editing=true,
    deleting=true,
                      })=>{
    const clickOnRecord=(id)=>history.push(`/${pageUrl}/view/${id}`)
    return(
        <>
                    <Switch>
                        <Route exact path={`/${pageUrl}`}>
                            <h2 className='page-content__title'>{pageTitle}</h2>
                            <div className='page-functional'>
                                <SearchPanel />
                                {adding &&
                                <AddBtn
                                    urlToCreate={`/${pageUrl}/${pageUrl}-creator`}
                                />
                                }
                                {deleting &&
                                <DeleteBtn
                                    deleteFunc = {deleteFunc}
                                />}
                            </div>
                            <Table
                                isLoading={isLoading}
                                getDataFunc={getDataFunc}
                                data={tableData}
                                columns={tableColumnsConfig}
                                handlerClick={clickOnRecord}
                                deleting={deleting}
                            />
                        </Route>
                        {adding &&
                        <Route exact path={`/${pageUrl}/${pageUrl}-creator`}>
                            <FormContainer
                                loadSelectorData={loadSelectorData}
                                urlToTable={`/${pageUrl}`}
                                createReq={createFunc}
                                formTitle={creatorTitle}
                                inputConfig={formInputsConfig}
                                optionsForSelector={optionsForSelectorData}
                                initialVals={creatorInitialFormValues}
                                fileUploadKeys={fileUploadKeys}
                                isLoading={isLoading}
                            />
                        </Route>
                        }
                        {editing &&
                        <Route exact path={`/${pageUrl}/${pageUrl}-updater/:id`}>
                            <FormContainer
                                loadSelectorData={loadSelectorData}
                                getByIdFunc={getByIdFunc}
                                valueById={valueById}
                                urlToTable={`/${pageUrl}`}
                                initialVals={updaterInitialFormValues}
                                updReq={updateFunc}
                                formTitle={updaterTitle}
                                inputConfig={formInputsConfig}
                                optionsForSelector={optionsForSelectorData}
                                isLoading={isLoading}
                            />
                        </Route>
                        }
                        <Route path={`/${pageUrl}/view/:id`}>
                            <RecordViewerContainer
                                titles={recordViewTitlesConfig}
                                urlToUpd={`/${pageUrl}/${pageUrl}-updater`}
                                urlToTable={`/${pageUrl}`}

                                valueById={valueById}
                                getByIdFunc={getByIdFunc}
                                clearFunc={clearFunc}
                                isLoading={isLoading}

                                editing={editing}
                            />
                        </Route>
                    </Switch>
        </>
    )
}

const mapStateToProps = state=>{
    return{
        isLoading : state.main.isFetchLoader
    }
}
export default connect(mapStateToProps)(withRouter(PageRenderer))