import React, {useEffect} from 'react'
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import ProfileContainer from "../../components/Profile/ProfileContainer";




const ProfilePage = ()=>{



    return(
        <>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="page-content">
                    <ProfileContainer urlToBack={'/main'}/>
                </div>
            </div>




        </>
    )
}

export  default ProfilePage