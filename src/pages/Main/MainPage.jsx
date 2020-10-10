import React from 'react'
import {Route,  Switch} from 'react-router-dom'
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header"


const MainPage = (props)=>{

    return(
        <>
            <Header />
            <div className="container">
                <Sidebar />
            </div>




        </>


    )
}

export  default  MainPage