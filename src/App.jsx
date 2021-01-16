import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import OrdersPage from './pages/Orders/OrdersPage';
import UsersPage from './pages/Users/UsersPage';
import ProductsPage from './pages/Products/ProductsPage';
import ProvidersPage from './pages/Providers/ProvidersPage';
import AuthPage from "./pages/Auth/AuthPage";
import CategoriesPage from "./pages/Categories/CategoriesPage";
import Modal from "./components/Modals/Modal";
import {connect} from "react-redux";
import ProfilePage from "./pages/Profile/ProfilePage";
import {authRefresh, toggleAuth} from "./redux/reducers/mainReducer";
import {getUserById} from "./redux/reducers/userReducer";
import {expChecker} from "./components/Auth/expChecker";
import {tokensChecker} from "./components/Auth/tokensChecker";
import {logout} from "./components/Auth/logout";
import Header from "./components/Header/Header";
import SidebarList from "./components/Sidebar/SidebarList";
import PageLoader from "./components/pageLoader/pageLoader";
import FaqPage from "./pages/Faq/FaqPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";

function App(props) {

    useEffect( ()=>{
        console.log('check')
        if (expChecker()) {                    //проверка на время токена
            props.toggleAuth(true)
            setTimeout(() =>props.toggleAuth(false),expChecker())
        } else if (tokensChecker()) {                            //отправка на новый токен
            const fetch = () => {
                props.authRefresh({
                    accessToken: localStorage.getItem('accessToken'),
                    refreshToken: localStorage.getItem('refreshToken'),
                    username: props.username
                })
            }
           fetch()
        } else {                                                            //выход из аккаунта
            props.toggleAuth(false)
            logout()
            props.history.push('/')
        }
    },[props.isAuthorized])

  return(

      (props.isPageLoader || props.isAuthorized===undefined ) ? <PageLoader/>:
            <>
                {props.modal.isOpen && <Modal/>}

                  {props.isAuthorized ?
                      <>
                          <Header/>
                          <div className="container">
                              <SidebarList/>
                              <div className="page-content">
                                  <Switch>
                                      <Route path={'/orders'} component={OrdersPage}/>
                                      <Route path={'/users'} component={UsersPage}/>
                                      <Route path={'/products'} component={ProductsPage}/>
                                      <Route path={'/categories'} component={CategoriesPage}/>
                                      <Route path={'/providers'} component={ProvidersPage}/>
                                      <Route path={'/profile'} exact component={ProfilePage}/>
                                      <Route path={'/faq'}  component={FaqPage}/>
                                      <Route path={'/aboutus'}  component={AboutUsPage}/>
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
        isLoading : state.main.isFetchLoader,
        modal : state.modal.isOpenModal,
        username:state.main.username
    }
}
export default connect(mapStateToProps,{toggleAuth,getUserById,authRefresh})(withRouter(App));
