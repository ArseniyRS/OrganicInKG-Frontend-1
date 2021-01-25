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

    getDataFunc,
    valueById,
    getByIdFunc,
    createFunc,
    updateFunc,
    clearFunc,
    deleteFunc,
    isLoading,
    hasData,

     recordViewValuesConfig,

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

                            <Table
                                isLoading={isLoading}
                                getDataFunc={getDataFunc}
                                data={tableData}
                                columns={tableColumnsConfig}
                                handlerClick={clickOnRecord}
                                deleting={deleting}
                                adding={adding}
                                urlToCreate = {`/${pageUrl}/${pageUrl}-creator`}
                                deleteFunc = {deleteFunc}
                                hasData={hasData}
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


                                recordViewValuesConfig={recordViewValuesConfig}
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

export default withRouter(PageRenderer)