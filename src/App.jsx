import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import OrdersPage from './pages/Orders/OrdersPage';
import UsersPage from './pages/Users/UsersPage';
import ProductsPage from './pages/Products/ProductsPage';
import ProvidersPage from './pages/Providers/ProvidersPage';
import AuthPage from "./pages/Auth/AuthPage";
import CategoriesPage from "./pages/Categories/CategoriesPage";
import MainPage from "./pages/Main/MainPage";
import Modal from "./components/Modals/Modal";
import {connect} from "react-redux";
import ProfilePage from "./pages/Profile/ProfilePage";
import withLogged from "./components/HOC/withLogged";
import {authRefresh, toggleAuth} from "./redux/reducers/mainReducer";
import {getUserById} from "./redux/reducers/userReducer";
import {expChecker} from "./components/Auth/expChecker";
import {tokensChecker} from "./components/Auth/tokensChecker";
import {logout} from "./components/Auth/logout";
import Preloader from "./components/Preloader/Preloader";
import Header from "./components/Header/Header";
import SidebarList from "./components/Sidebar/SidebarList";
import PageLoader from "./components/pageLoader/pageLoader";
import {TransitionGroup} from "react-transition-group";

function App(props) {
    useEffect( ()=>{
        if (expChecker()) {
            props.toggleAuth(true)
        } else if (tokensChecker()) {
            const fetch = async () => {
                await props.getUserById(JSON.parse(localStorage.getItem('id')))
                await props.authRefresh({
                    accessToken: localStorage.getItem('accessToken'),
                    refreshToken: localStorage.getItem('refreshToken'),
                    username: props.userById.phoneNumber
                })
            }
            fetch()
        } else {
            props.toggleAuth(false)
            logout()
            props.history.push('/')
        }
    },[props.isAuthorized])
const [renderCounter,setRenderCounter]= useState(0)
useEffect(()=>{
    console.log(renderCounter)
    let buff=renderCounter
    setRenderCounter(buff++)
},[])
  return(




      (props.isPageLoader || props.isAuthorized===undefined ) ? <PageLoader/>:
            <>

                          <Modal/>
                  {props.isAuthorized ?
                      <>
                          <Header/>
                          <div className="container">
                              <SidebarList/>
                              <div className="page-content">
                                  <Switch>
                                      <Route path={'/'} exact component={MainPage}/>
                                      <Route path={'/orders'} component={OrdersPage}/>
                                      <Route path={'/users'} component={UsersPage}/>
                                      <Route path={'/products'} component={ProductsPage}/>
                                      <Route path={'/categories'} component={CategoriesPage}/>
                                      <Route path={'/providers'} component={ProvidersPage}/>
                                      <Route path={'/profile'} exact component={ProfilePage}/>
                                  </Switch>
                              </div>
                          </div>
                      </>
                      :
                      <>
                          <Switch>
                              <Route path={'/'} exact component={AuthPage}/>
                          </Switch>

                      </>
                  }
             </>

  )
}

const mapStateToProps = state=>{
    return{
        visible : state.modal.isOpenModal.isOpen,
        isAuthorized: state.main.isAuthorized,
        isPageLoader: state.main.isPageLoader,
        userById: state.user.userById,
        providerById: state.provider.providerById,
        productById: state.product.productById,
        categoryById: state.category.categoryById,
        categories: state.category.categories,
        users: state.user.users,
        products: state.product.products,
        providers: state.provider.providers,
        isLoading : state.main.isFetchLoader
    }
}
export default connect(mapStateToProps,{toggleAuth,getUserById,authRefresh})(withRouter(App));
